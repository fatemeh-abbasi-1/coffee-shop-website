import { useState } from "react";

import Section from "../../atoms/Section/Section";
import Title from "../../atoms/Title/Title";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";


const ContactUsSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [massage, setMassage] = useState("");

  const sendMessage = () => {
    setEmail("");
    setName("");
    setMassage("");
  };

  return (
    <Section>
      <div className="flex gap-96 pt-32 justify-center">
        <div className="flex flex-col gap-20 w-[1000px] ">
          <Title size="medium">Contact Us</Title>
          <div className="flex flex-col gap-12">
            <InputWithLable
              type={"text"}
              labelText={"Name"}
              id="Contact-Name"
              variant="secondary"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <InputWithLable
              variant="secondary"
              type={"text"}
              labelText={"Email"}
              id="Contact-Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />

            <InputWithLable
              variant="secondary"
              type={"text"}
              labelText={"Message"}
              id="Contact-Message"
              onChange={(e) => {
                setMassage(e.target.value);
              }}
              value={massage}
            />
          </div>
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactUsSection;
