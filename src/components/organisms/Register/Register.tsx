import { useEffect, useRef, useState } from "react";

import Section from "../../atoms/Section/Section";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";

import Americano from "../../../assets/images/Americano.png";

const Register = () => {
  const nameRegex = /^[a-zA-Z]{5,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    if (
      nameRegex.test(name) &&
      emailRegex.test(email) &&
      passwordRegex.test(password)
    ) {
      setName("");
      setEmail("");
      setPassword("");
      console.log("you can enter in site..");
    } else {
      console.log('you con"nt .....');
    }
  };

  return (
    <Section>
      <div className="flex justify-center pt-32">
        <div className="flex flex-col gap-6 w-1/3 bg-dark_brown2 py-10 px-10 items-center border border-mocha">
          <Title size="medium">REGISTER</Title>

          <InputWithLable
            type="text"
            id="name"
            labelText="Name"
            ref={inputRef}
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <InputWithLable
            type="text"
            id="register email"
            labelText="Email Address"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <InputWithLable
            type="password"
            id="password"
            labelText="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <Button variant="submit" className="mt-4" onClick={handleClick}>
            <Text variant="small">Create Account</Text>
          </Button>
          <div className="flex justify-between gap-5">
            <div>
              <Text variant="small">Already have an account ? </Text>
              <Text variant="small">Login</Text>
            </div>
            <img src={Americano} alt="coffee cup" className="w-16" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Register;
