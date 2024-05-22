type Props = {
  message: "minimizeApp" | "maximizeApp" | "closeApp";
  children: React.ReactNode;
};

function TitleBarButton({ message, children }: Props) {
  return (
    <button
      className="no-drag"
      onClick={() => {
        window.electron.ipcRenderer.sendMessage(message, [message]);
      }}
    >
      {children}
    </button>
  );
}

export default TitleBarButton;
