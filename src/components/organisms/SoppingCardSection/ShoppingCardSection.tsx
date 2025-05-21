import { Product } from "../../../features/products/productSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Link } from "react-router-dom";

import ProductCard from "../../molecules/ProductCard/ProductCard";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";
import Section from "../../atoms/Section/Section";
import Text from "../../atoms/Text/Text";

const ShoppingCardSection = () => {
  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  const uniqueProducts = selectedProducts.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id)
  );
  const total = selectedProducts.reduce(
    (initial, product) => initial + Number(product.price),
    0
  );

  console.log(uniqueProducts.length);

  return (
    <Section>
      <div className="flex flex-col items-center pt-10 pb-24 gap-16">
        <Title>SOPPING CARD</Title>
        {uniqueProducts.length === 0 && (
          <Text>The shopping cart is empty.</Text>
        )}
        <div className="flex gap-28  flex-wrap justify-center">
          {uniqueProducts.map((p: Product) => {
            return <ProductCard key={p.id} product={p} />;
          })}
        </div>
        {uniqueProducts.length !== 0 && (
          <>
            <Text>
              Your Purchase Total : {total}
              <span className="text-white ml-3"> Toman</span>
            </Text>
            <div className="flex gap-10">
              <Button variant="large-secondary">
                <Link to={"/home"}>Home</Link>
              </Button>
              <Button>
                <Link to={"/pay"}>Payment</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default ShoppingCardSection;
