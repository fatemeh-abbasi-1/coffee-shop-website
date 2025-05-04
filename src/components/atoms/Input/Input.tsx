import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ type }) => {
  return (
    <input
      type={type === "text" ? "text" : "password"}
      className="w-96 h-12 bg-mocha rounded-lg text-white p-3 font-bold text-lg"
    />
  );
};

export default Input;
