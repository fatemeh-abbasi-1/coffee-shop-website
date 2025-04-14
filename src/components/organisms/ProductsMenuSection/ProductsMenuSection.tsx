import Title from "../../atoms/Title/Title";
import ProductCard from "../../molecules/ProductCard/ProductCard";

const ProductsMenuSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 pt-20">
      <div className="flex justify-center">
        <Title size="small">Our Products Menu</Title>
      </div>
      <ProductCard />
    </div>
  );
};

export default ProductsMenuSection;
