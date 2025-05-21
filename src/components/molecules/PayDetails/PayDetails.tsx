import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import Hr from "../../atoms/Hr/Hr";

const PayDetails = () => {
  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  const total = selectedProducts.reduce(
    (initial, product) => initial + Number(product.price),
    0
  );

  const discount = total * 2 / 1000

  return (
    <div className="flex flex-col gap-4 w-96 p-4">
      <Title size="small">Order Summary</Title>
      <div className="flex justify-between">
        <Text>Total</Text>
        <Text>{total}</Text>
      </div>
      <div className="flex justify-between">
        <Text>Discount</Text>
        <Text>{discount}</Text>
      </div>
      <Hr />
      <div className="flex justify-between">
        <Title size="small">Total</Title>
        <Text>{total - discount}</Text>
      </div>
    </div>
  );
};

export default PayDetails;
