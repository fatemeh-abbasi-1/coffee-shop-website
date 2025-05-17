import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import Hr from "../../atoms/Hr/Hr";

const PayDetails = () => {
  return (
    <div className="flex flex-col gap-4 w-96 p-4">
      <Title size="small">Order Summary</Title>
      <div className="flex justify-between">
        <Text>Total</Text>
        <Text>0</Text>
      </div>
      <div className="flex justify-between">
        <Text>Discount</Text>
        <Text>0</Text>
      </div>
      <Hr />
      <div className="flex justify-between">
        <Title size="small">Total</Title>
        <Text>0</Text>
      </div>
    </div>
  );
};

export default PayDetails;
