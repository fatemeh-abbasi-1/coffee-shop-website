import { useEffect, useRef } from "react";

import Section from "../../atoms/Section/Section";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";

import Americano from "../../../assets/images/Americano.png";
import Input from "../../atoms/Input/Input";

const Register = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Section>
      <div className="flex justify-center pt-32">
        <div className="flex flex-col gap-6 w-1/3 bg-dark_brown2 py-10 px-10 items-center border border-mocha">
          <Title size="medium">REGISTER</Title>
          {/* <InputWithLable type="text" id="register name" labelText="Name" /> */}
          <div className="flex flex-col gap-1">
            <label htmlFor="">
              <Text variant="small">Name</Text>
            </label>
            <Input type="text" ref={inputRef} />
          </div>

          <InputWithLable
            type="text"
            id="register email"
            labelText="Email Address"
          />
          <InputWithLable type="password" id="password" labelText="Password" />
          <Button variant="submit" className="mt-4">
            <Text variant="small">Create Account</Text>
          </Button>
          <div className="flex justify-between gap-5">
            <div>
              <Text variant="small">Already have an account ? </Text>
              <Text variant="small">Login</Text>
            </div>
            <img src={Americano} alt="" className="w-16" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Register;
