import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/home/HomePage"));
const Login = lazy(() => import("../pages/login/LoginPage"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
