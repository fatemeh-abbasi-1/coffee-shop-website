import { useState } from "react";

import Image from "../../atoms/Image/Image";
import InputWithLable from "../InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";

const CardPaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePay = () => {
    setCardNumber("");
    setCardHolder("");
    setCvv('');
  };
  return (
    <div className="">
      <Image
        src="src/assets/images/BankCard.png"
        alt="Bank Card"
        className="w-[380px] mb-5"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-6"
      >
        <InputWithLable
          labelText="Card Number"
          variant="primary"
          id="card-number"
          type={"text"}
          placeholder="* * * *    * * * *    * * * *    * * * *"
          value={cardNumber}
        />
        <InputWithLable
          labelText="Cardholder Name"
          variant="primary"
          id="caed-holder"
          type={"text"}
          value={cardHolder}
        />
        <InputWithLable
          labelText="Cvv"
          variant="primary"
          id="caed-cvv"
          type={"text"}
          value={cvv}
        />
        <Button onClick={handlePay} className="mt-5">Pay</Button>
      </form>
    </div>
  );
};

export default CardPaymentForm;
