import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Section from "../../atoms/Section/Section";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";

import coffee from "../../../assets/images/Login-Coffee.png";

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleLogin = async () => {
    try {
      const signIn = await signInWithEmailAndPassword(auth, email, password);
      console.log(signIn);
      setError("");
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        setEmail("");
        setPassword("");
      }
    }
  };

  return (
    <Section>
      <div className="flex justify-center pt-44 px-4">
        <div className="flex flex-col gap-6 w-full md:max-w-md lg:max-w-lg xl:max-w-xl py-10 px-8 items-center">
          <div className="flex flex-col gap-6 w-full">
            <Title size="medium">LOGIN</Title>

            <InputWithLable
              variant="primary"
              type="text"
              labelText="Email Address"
              id="login-email"
              ref={inputRef}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />

            <InputWithLable
              variant="primary"
              type="password"
              labelText="Password"
              id="login-password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />

            <Button
              variant="submit"
              className="mt-4 w-full"
              onClick={handleLogin}
            >
              <Text variant="small">Log in</Text>
            </Button>

            {error && (
              <Text variant="small" className="text-red-500">
                {error}
              </Text>
            )}

            <div className="flex justify-between gap-10 w-full items-center">
              <div>
                <Text variant="small">Don't have an account ?</Text>
                <Text variant="small">
                  <Link to={"/register"}>Register</Link>
                </Text>
              </div>
              <img src={coffee} alt="coffee image" className="w-16" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Login;
