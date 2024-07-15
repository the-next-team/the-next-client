import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelector } from "../states/user/userSelector";
import useTabMenu from "../hooks/useTabMenu";

function PrivateRoute() {
  const isAuthenticated = useRecoilValue(userSelector);
  const location = useLocation();
  const { activeTab } = useTabMenu();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={`${process.env.PUBLIC_URL}/login`}
        replace={true}
        state={{ from: location }}
      />
    );
  }

  if (!activeTab) {
    return (
      <Navigate to={`${process.env.PUBLIC_URL}/hm/HMM001L`} replace={true} />
    );
  }

  return <Outlet />;
}

export default PrivateRoute;
