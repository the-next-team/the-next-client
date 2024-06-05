import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Layout from "../layout/Layout";
import AuditPage from "../pages/audit/AuditPage";

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
        <Route path="/audit" element={<AuditPage />} />
        <Route path="*" element={<Navigate replace={true} to="/404" />} />
        {/* <Route path="popup" element={<Popup />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
