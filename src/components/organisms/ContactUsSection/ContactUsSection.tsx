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
      <div className="flex justify-center pt-32">
        <div className="flex flex-col gap-10 w-full max-w-2xl">
          <div className="flex flex-col gap-6">
            <InputWithLable
              type="text"
              labelText="Name"
              id="Contact-Name"
              variant="primary"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <InputWithLable
              type="email"
              labelText="Email"
              id="Contact-Email"
              variant="primary"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <InputWithLable
              type="text"
              labelText="Message"
              id="Contact-Message"
              variant="primary"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className="flex gap-5 items-center">
            <Button onClick={sendMessage}>Send</Button>
            {error && (
              <Text variant="small" className="text-red-600">
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
