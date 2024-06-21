import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import AuditPage from "../pages/audit/AuditPage";
import PrivateRoute from "./PrivateRoute";

const Login = lazy(() => import("../pages/login/LoginPage"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/*" element={<Layout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace={true} to="/404" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
