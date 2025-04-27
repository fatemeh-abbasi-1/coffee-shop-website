import {
  addProductInCard,
  removeProductFromCard,
} from "../../../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";

import { NumberProductSelectedProps } from "./types";

import Trash from "../../../assets/icons/Trash";
import Plus from "../../../assets/icons/Plus";
import Text from "../../atoms/Text/Text";
import { useEffect } from "react";

const NumberProductSelected: React.FC<NumberProductSelectedProps> = ({
  productId,
  setIsHidden,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  const count = selectedProducts.filter((p) => p.id === productId).length;

  useEffect(() => {
    if (count === 0) {
      setIsHidden(false);
    }
  }, [count]);

  const plusClick = () => {
    dispatch(addProductInCard(productId));
  };
  const trashClick = () => {
    dispatch(removeProductFromCard(productId));
  };

  return (
    <div className="flex gap-4">
      <span
        className="text-white mt-1 text-2xl cursor-pointer"
        onClick={trashClick}
      >
        <Trash />
      </span>
      <Text>{count}</Text>

      <span className="text-white mt-1 cursor-pointer" onClick={plusClick}>
        <Plus />
      </span>
    </div>
  );
};

export default NumberProductSelected;
