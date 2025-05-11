import { Route, Routes } from "react-router-dom";
//Navigate
import HomePage from "../components/pages/HomePage";
import Register from "../components/organisms/Register/Register";
import Login from "../components/organisms/Login/Login";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
