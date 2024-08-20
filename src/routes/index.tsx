import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import AuditPage from "../pages/audit/AuditPage";
import Address from "../pages/dashboard/components/popup/Address";
import Error404Page from "../pages/error/Error404Page";
import PrivateRoute from "./PrivateRoute";

const Login = lazy(() => import("../pages/login/LoginPage"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/*" element={<Layout />} />
          <Route path="/address" element={<Address onSubmit={() => {}} />} />
        </Route>
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
