// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../app/store";
// import { fetchSelectedProducts } from "../../features/products/productSlice";

import MainTemplate from "../templates/MainTemplates/MainTemplate";
import ShoppingCardSection from "../organisms/SoppingCardSection/ShoppingCardSection";
//import { useEffect } from "react";

const ShoppingCardPage = () => {
  //   const dispatch = useDispatch<AppDispatch>();

  //   useEffect(() => {
  //     dispatch(fetchSelectedProducts());
  //   }, []);

  return (
    <MainTemplate>
      <ShoppingCardSection />
    </MainTemplate>
  );
};

export default ShoppingCardPage;
