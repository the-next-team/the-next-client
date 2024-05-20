import { useEffect, useState } from "react";

function Dashboard() {
  const [popup, setPopup] = useState<Window | null>();
  const [text, setText] = useState<string>("상세보기");

  //   useEffect(() => {
  //     if (!popup) return;
  //     window.addEventListener("message", getDataFromPopup, false);
  //     return () => {
  //       window.removeEventListener("message", getDataFromPopup);
  //     };
  //   }, [popup]);

  //   const getDataFromPopup = (e: MessageEvent) => {
  //     if (e.origin !== window.location.origin) return;
  //     const { result } = e.data;

  //     if (result) {
  //       const { status, data } = result;

  //       if (status === "success") {
  //         setText(data);
  //         // 팝업 초기화
  //         popup?.close();
  //         setPopup(null);
  //       }
  //     }
  //   };

  //   const openPopup = (link: string) => {
  //     if (popup) {
  //       // 중복 팝업 방지
  //       popup?.close();
  //       setPopup(null);
  //     }
  //     const width = 500;
  //     const height = 400;

  //     const left = window.screenX + (window.outerWidth - width) / 2;
  //     const top = window.screenY + (window.outerHeight - height) / 2;
  //     const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;

  //     const newPopup = window.open(link, "_blank", windowFeatures);
  //     setPopup(newPopup);
  //   };

  return <div className="flex items-start gap-5">Dashboard</div>;
}

export default Dashboard;
