import { useEffect, useState } from "react";
import useIsElectron from "./useIsElectron";
import useQueryParams from "./useQueryParams";

export function usePopupChild() {
  const isElectron = useIsElectron();
  const params = useQueryParams();
  const [popupId, setPopupId] = useState<string | null>(null);

  useEffect(() => {
    const id = params.get('popupId');
    if (id) {
      setPopupId(id);
    }
  }, []);

  const sendResultToParent = (result: any) => {
    if (!popupId) return;

    if (!isElectron) {
      // 웹 환경에서 부모 창에 메시지 전달
      window.opener.postMessage({ popupId, result }, window.location.origin);
    } else {
      // Electron 환경에서 부모 창에 메시지 전달
      window.electron?.ipcRenderer.sendMessage(`popup-result-${popupId}`, { popupId, result });
    }
    window.close(); // 팝업 닫기
  };

  const closePopup = () => {
    window.close(); // 팝업 닫기
  };

  return { sendResultToParent, closePopup, popupId, params };
}
