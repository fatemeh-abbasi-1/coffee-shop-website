import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Section from "../../atoms/Section/Section";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setError("");
      navigate("/home");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return (
    <Section>
      <div className="flex justify-center pt-32 px-4">
        <div className="flex flex-col w-full md:max-w-md lg:max-w-lg xl:max-w-xl py-10 px-8 items-center">
          <div className="flex flex-col gap-6 w-full">
            <Title size="medium">REGISTER</Title>

            <InputWithLable
              type="text"
              labelText="Name"
              id="register-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="primary"
            />

            <InputWithLable
              type="email"
              labelText="Email"
              id="register-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="primary"
            />

            <InputWithLable
              type="password"
              labelText="Password"
              id="register-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="primary"
            />

            <Button
              variant="submit"
              className="mt-4 w-full"
              onClick={handleRegister}
            >
              <Text variant="small">Register</Text>
            </Button>

            {error && (
              <Text variant="small" className="text-red-500">
                {error}
              </Text>
            )}

            <Text variant="small">
              Already have an account? <Link to="/login">Login</Link>
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Register;
