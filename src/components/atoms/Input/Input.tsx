import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ type }) => {
  return (
    <input
      type={type === "text" ? "text" : "password"}
      className="w-80 h-12 bg-main-background-primary rounded-lg"
    />
  );
};

export default Input;
