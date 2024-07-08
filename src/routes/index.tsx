import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import AuditPage from "../pages/audit/AuditPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import CommonCodePage from "../pages/preferences/code/common/CommonCodePage";
import MenuManagement from "../pages/preferences/menu/MenuManagement";
import ScreenManagement from "../pages/screen/ScreenManagement";
import Team from "../pages/preferences/team/Team";
import User from "../pages/preferences/user/User";
import MessageListPage from "../pages/system/message/MessageListPage";
import JobCodePage from "../pages/preferences/code/job/JobCodePage";
import Error404Page from "../pages/error/Error404Page";

const Login = lazy(() => import("../pages/login/LoginPage"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/*" element={<Layout />}>
            {/* [HOME] */}
            {/* 메인 -> 메인화면 */}
            <Route path="dashboard/Dashboard" element={<Dashboard />} />

            {/* [시스템] */}
            {/* 코드관리 -> 공통코드 */}
            <Route path="system/commoncode" element={<CommonCodePage />} />
            {/* 기준관리(중앙회) -> 코드매핑(vs중앙회직업코드) */}
            <Route path="system/jobcode" element={<JobCodePage />} />
            {/* 메뉴권한 -> 메뉴관리 */}
            <Route path="system/menumanagement" element={<MenuManagement />} />
            {/* 메뉴권한 -> 화면관리 */}
            <Route
              path="system/screenmanagement"
              element={<ScreenManagement />}
            />
            {/* 사용자 -> 팀(파트) */}
            <Route path="system/team" element={<Team />} />
            {/* 사용자 -> 사용자 */}
            <Route path="system/user" element={<User />} />
            {/* 전문관리 -> 전문처리이력 */}
            <Route path="system/message" element={<MessageListPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
