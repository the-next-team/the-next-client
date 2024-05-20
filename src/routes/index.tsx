import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const Home = lazy(() => import("../pages/home/HomePage"));
const Login = lazy(() => import("../pages/login/LoginPage"));
const Error404 = lazy(() => import("../pages/error/Error404Page"));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
