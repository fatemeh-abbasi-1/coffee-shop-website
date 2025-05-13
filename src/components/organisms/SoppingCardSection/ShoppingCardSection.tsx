import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import ShoppingCardItem from "../ShoppingCardItem/ShoppingCardItem";
import Title from "../../atoms/Title/Title";
//import Button from "../../atoms/Button/Button";
import Section from "../../atoms/Section/Section";

import { Product } from "../../../features/products/productSlice";

const ShoppingCardSection = () => {
  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  console.log(selectedProducts);

  return (
    <Section>
      <div>
        <Title size="medium">SOPPING CARD</Title>
        <div className="flex gap-10  flex-wrap justify-center py-16">
          {selectedProducts.map((p: Product) => (
            <ShoppingCardItem product={p} key={p.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ShoppingCardSection;
