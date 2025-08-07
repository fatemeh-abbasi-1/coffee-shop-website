import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
//import { changeModalState } from "../../../features/products/productSlice";

import { useEffect, useRef, useState } from "react";

import InputWithLable from "../InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";

const CardPaymentForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const inputRef = useRef<HTMLInputElement>(null);

  const [cardNumber, setCardNumber] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [cvv, setCvv] = useState("");

  const [validCard, setValidCard] = useState(false);
  const [validSecondPassword, setValidSecondPassword] = useState(false);
  const [validCvv, setValidCvv] = useState(false);

  const [cardFocus, setCardFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [cvvFocus, setCvvFocus] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidCard(/^\d{16,19}$/.test(cardNumber));
  }, [cardNumber]);

  useEffect(() => {
    setValidSecondPassword(/^\d+$/.test(secondPassword));
  }, [secondPassword]);

  useEffect(() => {
    setValidCvv(/^\d{3,4}$/.test(cvv));
  }, [cvv]);

  const handlePay = () => {
    if (!validCard || !validSecondPassword || !validCvv) {
      setError("Please enter valid information.");
      return;
    }

    setError("");
    setCardNumber("");
    setSecondPassword("");
    setCvv("");
    dispatch(changeModalState());
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col w-full">
        <form action="" className="flex flex-col w-full gap-5">
          <InputWithLable
            variant="secondary"
            id="card-number"
            type="text"
            labelText="Card Number"
            value={cardNumber}
            className={`
          w-[500px] ${
            error && !cardFocus && !validCard && "border-b-4 border-b-red-600"
          }
            `}
            onChange={(e) => setCardNumber(e.target.value)}
            onFocus={() => setCardFocus(true)}
            onBlur={() => setCardFocus(false)}
            error={!validCard && cardFocus && cardNumber}
            errorText="Card number must be 16 to 19 digits."
          />
          <InputWithLable
            variant="secondary"
            id="second-password"
            type="text"
            labelText="Second Password"
            value={secondPassword}
            className={`w-[500px] ${
              error &&
              !passwordFocus &&
              !validSecondPassword &&
              "border-b-4 border-b-red-600"
            }`}
            onChange={(e) => setSecondPassword(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            error={!validSecondPassword && passwordFocus && secondPassword}
            errorText="Password must contain only digits."
          />

          <InputWithLable
            variant="secondary"
            id="cvv"
            type="text"
            labelText="CVV"
            value={cvv}
            className={`w-[500px] ${
              error && !cvvFocus && !validCvv && "border-b-4 border-b-red-600"
            }`}
            onChange={(e) => setCvv(e.target.value)}
            onFocus={() => setCvvFocus(true)}
            onBlur={() => setCvvFocus(false)}
            error={!validCvv && cvvFocus && cvv}
            errorText="CVV must be 3 or 4 digits."
          />
        </form>
      </div>
      <Button
        variant="large-secondary"
        className="mt-8 text-mocha"
        onClick={handlePay}
      >
        Pay
      </Button>
      {error && (
        <Text variant="small" className="text-red-500">
          {error}
        </Text>
      )}
    </div>
  );
};

export default CardPaymentForm;
