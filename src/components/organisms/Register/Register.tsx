import Section from "../../atoms/Section/Section";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";

const Register = () => {
  return (
    <Section>
      <div className="flex justify-center">
        <div className="flex flex-col gap-8 w-1/3 bg-mocha p-10 items-center">
          <Title size="medium">REGISTER</Title>
          <InputWithLable type="text" id="name" labelText="Name" />
          <InputWithLable type="text" id="Email" labelText="Email Address" />
          <InputWithLable type="password" id="password" labelText="Password" />
          <Button variant="submit">
            <Text>Create Account</Text>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Register;
