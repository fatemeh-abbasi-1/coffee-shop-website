import { useSelector } from "react-redux";

import Title from "../../atoms/Title/Title";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import { Product } from "../../../features/products/productSlice";

const ProductsMenuSection: React.FC = () => {
  // const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  return (
    <div className="flex flex-col gap-16 pt-20">
      <div className="flex justify-center">
        <Title size="small">Our Products Menu</Title>
      </div>
      {/* <ProductCard /> */}
      <div className="flex flex-wrap">
        {products.map((product: Product) => {
          <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsMenuSection;
