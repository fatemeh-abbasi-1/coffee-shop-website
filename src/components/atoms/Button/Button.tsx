import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ variant = "primary", children }) => {
  const baseStyles = "w-40 h-14 rounded-full font-bold";
  const sizeStyles =
    variant === "primary"
      ? " bg-tranparent text-white outline outline-4 outline-mocha"
      : "bg-white text-mocha text-lg";

  return <button className={`${baseStyles} ${sizeStyles}`}>{children}</button>;
};

export default Button;
