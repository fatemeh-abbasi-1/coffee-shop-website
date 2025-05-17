import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { useEffect } from "react";
import { fetchSelectedProducts } from "../features/products/productSlice";

import HomePage from "../components/pages/HomePage";
import Register from "../components/organisms/Register/Register";
import Login from "../components/organisms/Login/Login";
import ShoppingCardPage from "../components/pages/ShoppingCardPage";
import AboutUsPage from "../components/pages/AboutUsPage";
import ContactUsPage from "../components/pages/ContactUsPage";
import PayPage from "../components/pages/PayPage";

const AppRoutes = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSelectedProducts());
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/card" element={<ShoppingCardPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/pay" element={<PayPage />} />
    </Routes>
  );
};

export default AppRoutes;
