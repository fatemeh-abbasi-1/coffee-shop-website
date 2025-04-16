import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import img from "./../../../assets/images/coffee-cup.png";
// import { Product } from "../../../features/products/productSlice";

const ProductCard = ({name,price}) => {
  return (
    <div className="md:w-[400px] h-36 bg-transparent border-4 border-mocha pl-20 relative pt-3">
      <img src={img} alt="" className="w-[90px] h-[85px] absolute -left-12" />
      <div className="flex flex-row gap-12">
        <div className="flex flex-col pt-3 gap-2">
          <Text variant="small">{name}</Text>
          <Text variant="small">{price}</Text>
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
