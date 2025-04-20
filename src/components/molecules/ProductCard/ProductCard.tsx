import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import { ProductsCardProps } from "./type";

const ProductCard: React.FC<ProductsCardProps> = ({ product }) => {
  return (
    <div className="md:w-[400px] h-36 bg-transparent border-4 border-mocha pl-20 relative pt-3">
      <img
        src={product.image}
        alt=""
        className="w-[90px] h-[85px] absolute -left-12"
      />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col pt-3 gap-2">
          <Text variant="small">{product.name}</Text>
          <Text variant="small">{product.price}</Text>
        </div>

        <span className="p-4 border-l-2 mt-3 border-mocha">
          <Button variant="small">Add To Card</Button>
          {/* <Text variant="small">10%</Text> */}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
