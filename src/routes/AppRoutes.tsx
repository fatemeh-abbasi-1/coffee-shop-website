import { Route, Routes } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import Register from "../components/organisms/Register/Register";
import Login from "../components/organisms/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
