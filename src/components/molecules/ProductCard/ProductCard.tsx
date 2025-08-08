import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { addProductInCard } from "../../../features/products/productSlice";

import { ProductsCardProps } from "./type";

import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import NumberProductSelected from "../NumberProductSelected/NumberProductSelected";
import Image from "../../atoms/Image/Image";

const ProductCard: React.FC<ProductsCardProps> = ({ product }) => {
  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  const dispatch = useDispatch<AppDispatch>();

  const [isHidden, setIsHidden] = useState(false);
  const idRef = useRef<HTMLSpanElement>(null);

  const addToCard = () => {
    dispatch(addProductInCard(Number(idRef.current?.textContent)));
  };

  const count = selectedProducts.filter((p) => p.id === product.id).length;

  useEffect(() => {
    if (count > 0) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [count]);

  return (
    <div className="w-[300px] md:w-[400px] h-36 bg-transparent border-4 border-mocha pl-10 md:pl-20 relative pt-3">
      <span ref={idRef} className="hidden">
        {product.id}
      </span>
      <Image
        src={product.image}
        className="w-20 md:w-[90px] h-[85px] absolute -left-12 top-5"
        alt="Product-Image"
      />
      <div className="flex flex-row justify-between">
        <div className="gap-1 flex flex-col pt-3 md:gap-2">
          <Text variant="small">{product.name}</Text>
          <div className="flex gap-3">
            <Text variant="small">{`${product.price} $`}</Text>
          </div>
        </div>

        <span className="p-1 md:p-4 border-l-2 mt-3 border-mocha h-20 flex items-center">
          <Button
            variant="small"
            onClick={addToCard}
            className={isHidden ? "hidden" : ""}
          >
            Add To Card
          </Button>

          {isHidden && (
            <NumberProductSelected
              productId={product.id}
              isHidden={isHidden}
              setIsHidden={setIsHidden}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
