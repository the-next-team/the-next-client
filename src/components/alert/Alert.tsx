import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import useAlert from "../../hooks/useAlert";
import { alertState } from "../../states/alert/alertAtom";
import Modal from "../modal/Modal";
import { alertStyle } from "./AlertAction";

function Alert() {
    const alertValue = useRecoilValue(alertState);
    const { hideAlert } = useAlert();

    useEffect(() => {
      const preventGoBack = () => {
        hideAlert();
      };

      window.addEventListener("popstate", preventGoBack);
      return () => {
        window.removeEventListener("popstate", preventGoBack);
      };
    }, [alertValue.open]);

    return (
      <Modal open={alertValue.open}>
        <div
          className={`bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-container w-[350px] overflow-hidden transition-transform ease-in-out px-[24px] ${
            alertValue.open ? "scale-100" : "scale-90"
          }`}
        >
          <div className="py-[24px] text-xl font-medium text-center whitespace-pre-line break-keep">
            {alertValue.content}
          </div>
          <div className="flex justify-center w-full gap-4">
            {alertValue.actions?.map((m, i) => (
              <button key={i} onClick={m.handler} className="w-full mb-[24px] h-10">
                <p
                  className={`px-4 h-full rounded flex justify-center items-center text-base font-medium ${alertStyle(
                    m.type
                  )}`}
                >
                  {m.title}
                </p>
              </button>
            ))}
            {alertValue.actions == null && (
              <button onClick={() => hideAlert()} className="w-full mb-[24px] h-10">
                <p
                  className={`px-4 h-full rounded flex justify-center items-center text-base font-medium ${alertStyle(
                    "success"
                  )}`}
                >
                  확인
                </p>
              </button>
            )}
          </div>
        </div>
      </Modal>
    );
  }

  export default Alert;