import { useEffect, useState } from "react";

function useVersion() {
  const [appVersion, setAppVersion] = useState("0.0.0");

  useEffect(() => {
    window.electron?.ipcRenderer.on("app-version", (arg) => {
      setAppVersion(arg as string);
    });

    window.electron?.ipcRenderer.sendMessage("app-version", [""]);
  }, []);

  return [appVersion];
}

export default useVersion;
