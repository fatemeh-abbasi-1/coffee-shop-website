import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ variant = "primary", children }) => {
  const baseStyles = "w-40 h-14 border-4 rounded-full center";
  const sizeStyles =
    variant === "primary"
      ? "bg-tranparent  border-mocha text-white"
      : "bg-white text-black";

  return <button className={`${baseStyles} ${sizeStyles}`}>{children}</button>;
};

export default Button;
