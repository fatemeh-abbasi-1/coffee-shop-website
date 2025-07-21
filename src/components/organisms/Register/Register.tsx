import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

import Section from "../../atoms/Section/Section";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";

import Americano from "../../../assets/images/Americano.png";

const Register = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setValidEmail(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(passwordRegex.test(password));
  }, [password]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = async () => {
    try {
      const sendInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(sendInfo.user);
      setSuccess(true);
      navigate("/home");
      setError("");
      setEmail("");
      setPassword("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        setSuccess(false);
        setEmail("");
        setPassword("");
      } else {
        setError("An error has occurred.");
      }
    }
  };

  return (
    <Section>
      <div className="flex justify-center pt-44">
        <div className="flex flex-col gap-6 w-1/3 bg-dark_brown2 py-10 px-10 items-center border border-mocha">
          <Title size="medium">REGISTER</Title>

          <div className="flex flex-col gap-3">
            <InputWithLable
              variant="primary"
              className={
                error &&
                !emailFocus &&
                !validEmail &&
                "shadow-red-600 shadow-md border-2 border-red-600"
              }
              type="text"
              id="register email"
              labelText="Email Address"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              onBlur={() => setEmailFocus(false)}
              onFocus={() => setEmailFocus(true)}
              ref={inputRef}
            />
            {!validEmail && emailFocus && email && (
              <Text variant="smaller">Enter your email address.</Text>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <InputWithLable
              variant="primary"
              className={
                error &&
                !passwordFocus &&
                !validPassword &&
                "shadow-red-600 shadow-md border-2 border-red-600"
              }
              type="password"
              id="password"
              labelText="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              onBlur={() => setPasswordFocus(false)}
              onFocus={() => setPasswordFocus(true)}
            />
            {!validPassword && passwordFocus && password && (
              <Text variant="smaller">
                At least 8 characters and includes numbers and letters.
              </Text>
            )}
          </div>
          <Button variant="submit" className="mt-4" onClick={handleClick}>
            <Text variant="small">Create Account</Text>
          </Button>
          {error && (
            <Text
              variant="small"
              className="text-red-500 bg-creamy_white p-1 rounded-lg"
            >
              {error}
            </Text>
          )}
          {success && (
            <Text variant="small" className="text-green-500">
              Successful Registration!
            </Text>
          )}
          {success && <Link to="/home"></Link>}
          <div className="flex justify-between gap-10">
            <div>
              <Text variant="small">Already have an account ? </Text>
              <Text variant="small">
                <Link to={"/login"}>Login</Link>
              </Text>
            </div>
            <img src={Americano} alt="coffee cup" className="w-16" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Register;
