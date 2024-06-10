type Props = {
  path: String;
  width: number;
  height: number;
  children: React.ReactNode;
};

function PopupButton({ path, width, height, children }: Props) {
  const openNewWindow = () => {
    let route = path;
    if (window.location.href.includes("#")) {
      route = `/#${path}`;
    }
    window.electron?.ipcRenderer.sendMessage("open-new-window", {
      route: route, // 새 창에서 열 경로
      width: width, // 창의 넓이
      height: height, // 창의 높이
    });
  };

  return <button onClick={openNewWindow}>{children}</button>;
}

export default PopupButton;