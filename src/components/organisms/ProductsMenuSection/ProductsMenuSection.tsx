import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../atoms/Title/Title";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import {
  fetchProducts,
  Product,
} from "../../../features/products/productSlice";
import { RootState, AppDispatch } from "../../../app/store";

const ProductsMenuSection: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="flex flex-col gap-16 pt-20 pl-10">
      <div className="flex justify-center">
        <Title size="small">Our Products Menu</Title>
      </div>
      <div className="flex flex-wrap gap-16 justify-between">
        {products.map((product: Product) => (
          <ProductCard
            name={product.name}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsMenuSection;
