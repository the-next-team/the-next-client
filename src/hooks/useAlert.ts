import { useRecoilCallback, useRecoilState, useResetRecoilState } from "recoil";
import { AlertAction } from "../components/alert/AlertAction";
import { AlertState, alertState } from "../states/alert/alertAtom";

function useAlert() {
    const [alert, setAlert] = useRecoilState<AlertState>(alertState);
    const reset = useResetRecoilState(alertState);

    const showAlert = ({
      title,
      content,
      actions,
    }: {
      title?: string;
      content?: React.ReactNode;
      actions?: AlertAction[];
    }) => {
      setAlert({
        ...alert,
        open: true,
        title: title,
        content: content,
        actions: actions ?? [
          new AlertAction("확인", "success", () => hideAlert()),
        ],
      });
    };

    const hideAlert = useRecoilCallback(
      ({ snapshot }) =>
        async () => {
          return new Promise(async (resolve, reject) => {
            try {
              const alert = await snapshot.getPromise(alertState);
              setAlert({
                ...alert,
                open: false,
              });
              setTimeout(() => {
                reset();
                resolve(true);
              }, 300);
            } catch (error) {
              reject(error);
            }
          });
        },
      []
    );

    return { showAlert, hideAlert };
  }

  export default useAlert;