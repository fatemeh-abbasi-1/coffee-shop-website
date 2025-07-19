import { useState } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { changeModalState } from "../../../features/products/productSlice";

import Section from "../../atoms/Section/Section";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";

const ContactUsSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    setEmail("");
    setName("");
    setMessage("");
    dispatch(changeModalState());
  };

  return (
    <Section>
      <div className="flex gap-96 pt-52 justify-center ">
        <div className="flex flex-col gap-20 w-[1000px] ">
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
                setMessage(e.target.value);
              }}
              value={message}
            />
          </div>
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactUsSection;
