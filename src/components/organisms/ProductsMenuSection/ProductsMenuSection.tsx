import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../atoms/Title/Title";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import {
  fetchProducts,
  Product,
  incrementPage,
} from "../../../features/products/productSlice";
import { RootState, AppDispatch } from "../../../app/store";
import LeftArrowSvg from "../../../assets/icons/LeftArrowSvg";
import RightArrowSvg from "../../../assets/icons/RightArrowSvg";
// import { increment } from "../../../features/products/productSlice";

const ProductsMenuSection: React.FC = () => {
  const baseStyleArrows =
    "w-14 text-mocha bg-white p-2 rounded-full cursor-pointer";
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const page = useSelector((state: RootState) => state.products.page);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status, page]);

  const handleArrowRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(incrementPage());
  };
  return (
    <div className="flex flex-col gap-16 pt-20 pl-10">
      <div className="flex justify-center">
        <Title size="small">Our Products Menu</Title>
      </div>
      <div className="flex flex-wrap gap-16 justify-between">
        {products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className="flex flex-row gap-4 self-center">
        <span className={baseStyleArrows}>
          <LeftArrowSvg />
        </span>
        <span className={baseStyleArrows} onClick={handleArrowRightClick}>
          <RightArrowSvg />
        </span>
      </div>
    </div>
  );
};

export default ProductsMenuSection;
