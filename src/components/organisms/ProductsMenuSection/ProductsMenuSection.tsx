import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchProducts,
  Product,
  incrementPage,
  decrementPage,
} from "../../../features/products/productSlice";
import { RootState, AppDispatch } from "../../../app/store";

import Title from "../../atoms/Title/Title";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import Section from "../../atoms/Section/Section";
import Button from "../../atoms/Button/Button";

import LeftArrowSvg from "../../../assets/icons/LeftArrowSvg";
import RightArrowSvg from "../../../assets/icons/RightArrowSvg";

const ProductsMenuSection: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const page = useSelector((state: RootState) => state.products.page);
  const totalCount = useSelector(
    (state: RootState) => state.products.totalCount
  );

  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [page, dispatch]);

  const goToNext = () => {
    dispatch(incrementPage());
  };

  const goToPrew = () => {
    dispatch(decrementPage());
  };

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
          <Button variant="icon" onClick={goToPrew} disabled={page === 1}>
            <LeftArrowSvg />
          </Button>
          <Button
            variant="icon"
            onClick={goToNext}
            disabled={page === Math.ceil(totalCount / 9)}
          >
            <RightArrowSvg />
          </Button>

          <div>
            <Link to={"/card"}>
              <Button
                variant="large-secondary"
                className={`${
                  selectedProducts.length < 1 ? "hidden" : ""
                } ml-14 `}
              >
                Go To Card
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProductsMenuSection;
