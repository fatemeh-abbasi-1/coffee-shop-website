import { useState } from "react";

import Section from "../../atoms/Section/Section";
import Title from "../../atoms/Title/Title";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";
import Text from "../../atoms/Text/Text";
import Textarea from "../../atoms/Textarea/Textarea";



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
        <div className="flex flex-col gap-14 w-[700px] ">
          <Title size="medium">Contact Us</Title>
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
          <div className="flex justify-between">
            <Label htmlFor="Contact-Message">
              <Text>Message</Text>
            </Label>
            <Textarea
              value={massage}
              id="Contact-Message"
              onChange={(e) => {
                setMassage(e.target.value);
              }}
            />
          </div>
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactUsSection;
//  onChange={(e) => {
//               setMassage(e.target.value);
//             }}
//             value={massage}
