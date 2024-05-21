import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const Login = lazy(() => import("../pages/login/LoginPage"));
const Error404 = lazy(() => import("../pages/error/Error404Page"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main/*" element={<Layout />} />
      <Route path="*" element={<Navigate replace={true} to="/404" />} />
      {/* <Route path="popup" element={<Popup />} /> */}
      <Route path="/404" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
