import { Route, Routes } from "react-router-dom";
//Navigate
import HomePage from "../components/pages/HomePage";
import Register from "../components/organisms/Register/Register";
import Login from "../components/organisms/Login/Login";

const AppRoutes = () => {
  //const user = localStorage.getItem("userInfo");

  return (
    <Routes>
      {/* <Route
        path="/"
        element={
          user ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/register" replace />
          )
        }
      /> */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
