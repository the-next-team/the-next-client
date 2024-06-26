import { useSetRecoilState } from "recoil";
import { LoadingState, loadingState } from "../states/loading/loadingAtom";

function useLoading() {
  const setLoading = useSetRecoilState<LoadingState>(loadingState);

  const showLoading = () => {
    setLoading({
      open: true,
    });
  };

  const hideLoading = () => {
    setTimeout(() => {
      setLoading({
        open: false,
      });
    }, 300);
  };

  return { showLoading, hideLoading };
}

export default useLoading;
