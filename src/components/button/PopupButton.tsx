import useIsElectron from "../../hooks/useIsElectron";
import Button from "./Button";

type Props = {
  path: string;
  width: number;
  height: number;
  children: React.ReactNode;
};

function PopupButton({ path, width, height, children }: Props) {
  const isElectron = useIsElectron();
  const openNewWindow = () => {
    let route = path;
    if (window.location.href.includes("#")) {
      route = `/#${path}`;
    }

    if (!isElectron) {
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;
      const popup = window.open(route, undefined, windowFeatures);
      return popup;
    }

    window.electron?.ipcRenderer.sendMessage("open-new-window", {
      route: route, // 새 창에서 열 경로
      width: width, // 창의 넓이
      height: height, // 창의 높이
    });
  };

  return (
    <Button className="btn-sm btn-primary" onClick={openNewWindow}>
      {children}
    </Button>
  );
}

export default PopupButton;
