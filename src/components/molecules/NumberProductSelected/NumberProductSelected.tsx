import {
  addProductInCard,
  removeProductFromCard,
} from "../../../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";

import { NumberProductSelectedProps } from "./types";

import Trash from "../../../assets/icons/TrashSvg";
import Plus from "../../../assets/icons/PlusSvg";
import Text from "../../atoms/Text/Text";

const NumberProductSelected: React.FC<NumberProductSelectedProps> = ({
  productId,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  const addToCard = () => {
    dispatch(addProductInCard(productId));
  };
  const removeFromCard = () => {
    dispatch(removeProductFromCard(productId));
  };

  return (
    <div className="flex gap-6">
      <span
        className="text-white mt-1 text-2xl cursor-pointer"
        onClick={removeFromCard}
      >
        <Trash />
      </span>
      <Text>{selectedProducts.filter((p) => p.id === productId).length}</Text>

      <span className="text-white mt-1 cursor-pointer" onClick={addToCard}>
        <Plus />
      </span>
    </div>
  );
};

export default NumberProductSelected;
