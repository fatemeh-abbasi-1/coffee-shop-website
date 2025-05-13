import NumberProductSelected from "../../molecules/NumberProductSelected/NumberProductSelected";
import Text from "../../atoms/Text/Text";

import { ShoppingCardItemProps } from "./types";

//import img from "../../../assets/images/Iced-Coffee.png";

const ShoppingCardItem: React.FC<ShoppingCardItemProps> = ({ product }) => {
  return (
    <div className="flex gap-40 place-items-center w-[600px] h-44 border border-creamy_white">
      <div className="flex items-center gap-10">
        <img src={product.image} alt="Product Image" className="w-36 " />
        <Text className="">{product.name}</Text>
      </div>
      <div className="flex flex-col gap-6">
        <NumberProductSelected productId={product.id} />
        <Text>{product.price}</Text>
      </div>
    </div>
  );
};

export default ShoppingCardItem;
