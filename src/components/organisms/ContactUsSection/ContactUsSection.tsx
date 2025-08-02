import { useState } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { changeModalState } from "../../../features/products/productSlice";

import Section from "../../atoms/Section/Section";
import InputWithLable from "../../molecules/InputWithLabel/InputWithLabel";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";

const ContactUsSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const sendMessage = () => {
    if (email && message) {
      setEmail("");
      setName("");
      setMessage("");
      setError(false);
      dispatch(changeModalState());
    } else {
      setError(true);
    }
  };

  return (
    <Section>
      <div className="flex gap-96 justify-center pt-52">
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
          <div className="flex gap-20">
            <Button onClick={sendMessage}>Send</Button>
            {error && (
              <Text
                variant="small"
                className="text-red-600 mt-2 bg-creamy_white p-2 important"
              >
                Please Write the information.
              </Text>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUsSection;
