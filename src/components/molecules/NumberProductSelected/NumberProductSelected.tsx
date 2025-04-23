import { editProducts, Product } from "../../../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";

import { NumberProductSelectedProps } from "./types";

import Trash from "../../../assets/icons/Trash";
import Plus from "../../../assets/icons/Plus";
import Text from "../../atoms/Text/Text";

const NumberProductSelected: React.FC<NumberProductSelectedProps> = ({
  productId,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  const plusClick = () => {
    dispatch(editProducts(productId));
  };

  return (
    <div className="flex gap-4">
      <span className="text-white mt-1 text-2xl cursor-pointer">
        <Trash />
      </span>
      <Text>
        {selectedProducts.filter((p: Product) => p.id === productId).length}
      </Text>
      <span className="text-white mt-1 cursor-pointer" onClick={plusClick}>
        <Plus />
      </span>
    </div>
  );
};

export default NumberProductSelected;
