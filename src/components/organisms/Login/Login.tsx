import {useEffect, useRef } from "react";

import Section from "../../atoms/Section/Section";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";

import coffee from "../../../assets/images/Login-Coffee.png";

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Section>
      <div className="flex justify-center pt-32">
        <div className="flex flex-col gap-6 w-1/3 bg-dark_brown2 py-10 px-10 items-center border border-mocha">
          <Title size="medium">LOGIN</Title>
          <InputWithLable
            type="text"
            labelText="Email Address"
            id="login email"
            ref={inputRef}
          />
          <InputWithLable
            type="password"
            labelText="Password"
            id="login password"
          />
          <Button variant="submit" className="mt-4">
            <Text variant="small">Log in</Text>
          </Button>
          <div className="flex justify-between gap-5">
            <div>
              <Text variant="small">Don't have an account ?</Text>
              <Text variant="small">Register</Text>
            </div>
            <img src={coffee} alt="coffee image" className="w-16" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Login;
