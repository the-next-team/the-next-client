import { v4 as uuidv4 } from "uuid";
import useIsElectron from "./useIsElectron";

type PopupOptions = {
  popupId?: string;
  path: string;
  width: number;
  height: number;
  params?: Record<string, string>;
  onResult?: (data: any) => void;
  onClose?: () => void;
};

function generateQueryString(params: Record<string, string>) {
  return new URLSearchParams(params).toString();
}

export function usePopupOpener() {
  const isElectron = useIsElectron();

  const openPopup = (options: PopupOptions) => {
    const {
      popupId = uuidv4(), // 외부에서 `popupId`를 전달받거나 기본값으로 생성
      path,
      width,
      height,
      params = {},
      onResult,
      onClose,
    } = options;

    // `popupId`를 params에 추가하여 URL 쿼리스트링 생성
    const queryParams = { popupId: popupId, ...params };
    const queryString = generateQueryString(queryParams);
    let route = `${path}?${queryString}`;
    if (window.location.href.includes("#")) {
      route = `/#${route}`;
    }

    let popupHandled = false; // 플래그로 결과 처리 여부 관리

    if (!isElectron) {
      // 웹 환경에서 팝업 열기
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;
      const popup = window.open(route, "_blank", windowFeatures);

      if (popup) {
        // 팝업 닫힘 감지
        const timer = setInterval(() => {
          if (popup.closed) {
            clearInterval(timer);
            if (!popupHandled && onClose) {
              onClose(); // onResult가 호출되지 않았을 경우에만 onClose 호출
            }
          }
        }, 500);

        // 부모 창에서 postMessage로 데이터를 받음
        const handleMessage = (event: MessageEvent) => {
          if (
            event.origin === window.location.origin &&
            event.data.popupId === popupId
          ) {
            popupHandled = true; // onResult가 호출되었음을 플래그로 설정
            if (onResult) {
              onResult(event.data.result); // 부모 창으로 결과 전달
            }
            popup.close(); // 팝업 닫기
          }
        };

        window.addEventListener("message", handleMessage);

        return () => {
          clearInterval(timer);
          window.removeEventListener("message", handleMessage);
        };
      } else {
        console.error(
          "Popup failed to open, possibly blocked by a popup blocker."
        );
      }
    } else {
      // Electron 환경에서 팝업 열기
      window.electron?.ipcRenderer.sendMessage("open-popup", {
        popupId: popupId,
        route: route,
        width: width,
        height: height,
      });

      const handleResult = (data: any) => {
        popupHandled = true; // onResult가 호출되었음을 플래그로 설정
        if (onResult) {
          onResult(data);
        }
      };

      const handleClose = () => {
        if (!popupHandled && onClose) {
          onClose(); // onResult가 호출되지 않았을 경우에만 onClose 호출
        }
      };

      window.electron?.ipcRenderer.on(`popup-result-${popupId}`, handleResult);
      window.electron?.ipcRenderer.on(`popup-closed-${popupId}`, handleClose);

      return () => {
        window.electron?.ipcRenderer.removeListener(
          `popup-result-${popupId}`,
          handleResult
        );
        window.electron?.ipcRenderer.removeListener(
          `popup-closed-${popupId}`,
          handleClose
        );
      };
    }
  };

  return { openPopup };
}
