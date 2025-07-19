import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { changeModalState } from "../../../features/products/productSlice";

import { useEffect, useRef, useState } from "react";

import Image from "../../atoms/Image/Image";
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
  const [success, setSuccess] = useState(false);

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
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);

    setCardNumber("");
    setSecondPassword("");
    setCvv("");
    dispatch(changeModalState());
  };

  return (
    <div className="flex flex-col items-center gap-6 w-[400px]">
      <Image
        src="src/assets/images/BankCard.png"
        alt="Bank Card"
        className="w-[380px] mb-5"
      />

      <div className="flex flex-col gap-4 w-full">
        <InputWithLable
          variant="primary"
          id="card-number"
          type="text"
          labelText="Card Number"
          value={cardNumber}
          className={
            error && !cardFocus && !validCard && "border-4 border-red-600"
          }
          onChange={(e) => setCardNumber(e.target.value)}
          onFocus={() => setCardFocus(true)}
          onBlur={() => setCardFocus(false)}
          placeholder="____ ____ ____ ____"
        />
        {!validCard && cardFocus && cardNumber && (
          <Text variant="smaller">Card number must be 16 to 19 digits.</Text>
        )}

        <InputWithLable
          variant="primary"
          id="second-password"
          type="text"
          labelText="Second or Dynamic Password"
          value={secondPassword}
          className={
            error &&
            !passwordFocus &&
            !validSecondPassword &&
            "border-4 border-red-600"
          }
          onChange={(e) => setSecondPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        {!validSecondPassword && passwordFocus && secondPassword && (
          <Text variant="smaller">Password must contain only digits.</Text>
        )}

        <InputWithLable
          variant="primary"
          id="cvv"
          type="text"
          labelText="CVV"
          value={cvv}
          className={
            error && !cvvFocus && !validCvv && "border-4 border-red-600"
          }
          onChange={(e) => setCvv(e.target.value)}
          onFocus={() => setCvvFocus(true)}
          onBlur={() => setCvvFocus(false)}
        />
        {!validCvv && cvvFocus && cvv && (
          <Text variant="smaller">CVV must be 3 or 4 digits.</Text>
        )}
      </div>

      <Button variant="submit" className="mt-4" onClick={handlePay}>
        <Text variant="small">Pay</Text>
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
