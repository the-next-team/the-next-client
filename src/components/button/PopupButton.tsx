import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useIsElectron from "../../hooks/useIsElectron";
import Button from "./Button";

type Props = {
  id?: string;
  path: string;
  width: number;
  height: number;
  children: React.ReactNode;
  callback?: (data: any) => void;
  onClose?: () => void;
};

function PopupButton({
  id = uuidv4(),
  path,
  width,
  height,
  children,
  callback,
  onClose,
}: Props) {
  const isElectron = useIsElectron();

  useEffect(() => {
    if (isElectron && id) {
      // 팝업에서 응답 받기
      window.electron?.ipcRenderer.on(`popup-result-${id}`, (data: any) => {
        if (callback) {
          callback(data);
        }
      });

      // 팝업 닫힘 이벤트 처리
      window.electron?.ipcRenderer.on(`popup-closed-${id}`, () => {
        if (onClose) {
          onClose();
        }
      });

      return () => {
        window.electron?.ipcRenderer.removeAllListeners(`popup-result-${id}`);
        window.electron?.ipcRenderer.removeAllListeners(`popup-closed-${id}`);
      };
    }
  }, [isElectron, id, callback, onClose]);

  const openPopup = () => {
    let route = path;
    if (window.location.href.includes("#")) {
      route = `/#${path}`;
    }

    if (!isElectron) {
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;
      const popup = window.open(route, undefined, windowFeatures);
      if (popup) {
        const timer = setInterval(() => {
          if (popup.closed) {
            clearInterval(timer);
            if (onClose) {
              onClose();
            }
          }
        }, 500);
      }
      return;
    }

    window.electron?.ipcRenderer.sendMessage("open-popup", {
      id: id,
      route: route, // 새 창에서 열 경로
      width: width, // 창의 넓이
      height: height, // 창의 높이
    });
  };

  return (
    <Button className="btn-sm btn-primary" onClick={openPopup}>
      {children}
    </Button>
  );
}

export default PopupButton;
