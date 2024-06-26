import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import useLoading from "../../hooks/useLoading";
import { loadingState } from "../../states/loading/loadingAtom";
import Modal from "../modal/Modal";
import LoadingLottie from "./LoadingLottie";

function Loader() {
    const loadingValue = useRecoilValue(loadingState);
    const { hideLoading } = useLoading();

    useEffect(() => {
      const preventGoBack = () => {
        hideLoading();
      };

      window.addEventListener("popstate", preventGoBack);
      return () => {
        window.removeEventListener("popstate", preventGoBack);
      };
    }, [loadingValue.open]);

    return (
      <Modal open={loadingValue.open}>
        <div className="flex items-center justify-center w-full h-full">
          <LoadingLottie className="w-[250px]" />
        </div>
      </Modal>
    );
  }

  export default Loader;