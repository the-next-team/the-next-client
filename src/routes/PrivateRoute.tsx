import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelector } from "../states/user/userSelector";

function PrivateRoute() {
  const isAuthenticated = useRecoilValue(userSelector);
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to={`${process.env.PUBLIC_URL}/login`}
      replace={true}
      state={{
        from: location,
      }}
    />
  );
}

export default PrivateRoute;
