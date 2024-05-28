import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";

const Login = lazy(() => import("../pages/login/LoginPage"));
const Error404 = lazy(() => import("../pages/error/Error404Page"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="/main/*" element={<Layout />} />
        <Route path="*" element={<Navigate replace={true} to="/404" />} />
        {/* <Route path="popup" element={<Popup />} /> */}
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
