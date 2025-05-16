import { useState } from "react";

import Section from "../../atoms/Section/Section";
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";
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
      <div className="flex justify-between pt-28">
        <div className="flex flex-col gap-16 w-[1000px] ">
          <Title size="medium">Contact Us</Title>
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
            type={"text"}
            labelText={"Message"}
            id="Contact-Message"
            variant="secondary"
            onChange={(e) => {
              setMassage(e.target.value);
            }}
            value={massage}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
        <div className="mt-28 mb-28 border border-mocha p-10">
          <SocialLinks className="flex-col" />
        </div>
      </div>
    </Section>
  );
};

export default ContactUsSection;
