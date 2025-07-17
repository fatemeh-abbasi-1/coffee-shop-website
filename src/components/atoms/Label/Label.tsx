import { LabelProps } from "./types";

const Label: React.FC<LabelProps> = ({ children, htmlFor, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
