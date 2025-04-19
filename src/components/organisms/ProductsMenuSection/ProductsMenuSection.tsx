import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../atoms/Title/Title";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import {
  fetchProducts,
  Product,
  incrementPage,
  decrementPage,
} from "../../../features/products/productSlice";
import { RootState, AppDispatch } from "../../../app/store";
import LeftArrowSvg from "../../../assets/icons/LeftArrowSvg";
import RightArrowSvg from "../../../assets/icons/RightArrowSvg";
import Section from "../../atoms/Section/Section";

const ProductsMenuSection: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const page = useSelector((state: RootState) => state.products.page);

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [page, dispatch]);

  const handleArrowRightClick = () => {
    dispatch(incrementPage());
  };

  const handleArrowLeftClick = () => {
    dispatch(decrementPage());
  };

  const baseStyleArrows =
    "w-14 text-mocha bg-white p-2 rounded-full cursor-pointer";

  return (
    <Section backgroundColor={"bg-main-background-secondary"}>
      <div className="flex flex-col gap-16 pt-20 pl-10">
        <div className="flex justify-center">
          <Title size="medium">Our Products Menu</Title>
        </div>
        <div className="flex flex-wrap gap-16 justify-between">
          {products.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <div className="flex flex-row gap-4 self-center">
          <span className={baseStyleArrows} onClick={handleArrowLeftClick}>
            <LeftArrowSvg />
          </span>
          <span className={baseStyleArrows} onClick={handleArrowRightClick}>
            <RightArrowSvg />
          </span>
        </div>
      </div>
    </Section>
  );
};

export default ProductsMenuSection;
