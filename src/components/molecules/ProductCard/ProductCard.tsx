import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { editProducts } from "../../../features/products/productSlice";

import { ProductsCardProps } from "./type";

import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import NumberProductSelected from "../NumberProductSelected/NumberProductSelected";

const ProductCard: React.FC<ProductsCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isHidden, setIsHidden] = useState(false);
  const nameRef = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    // console.log(Number(nameRef.current?.textContent));
    setIsHidden(true);
    dispatch(editProducts(Number(nameRef.current?.textContent)));
  };

  return (
    <div className="md:w-[400px] h-36 bg-transparent border-4 border-mocha pl-20 relative pt-3">
      <span ref={nameRef} className="hidden">
        {product.id}
      </span>
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

        <span className="p-4 border-l-2 mt-3 border-mocha h-20">
          <Button
            variant="small"
            onClick={handleClick}
            className={isHidden ? "hidden" : ""}
          >
            Add To Card
          </Button>
          {isHidden && <NumberProductSelected />}
          {/* <Text variant="small">10%</Text> */}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
