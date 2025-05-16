import { TextareaProps } from "./types";

const Textarea: React.FC<TextareaProps> = ({ id, value, onChange }) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      className="bg-mocha w-[500px] rounded-lg text-white p-3 font-bold text-lg max-h-40"
      maxLength={400}
    ></textarea>
  );
};

export default Textarea;
