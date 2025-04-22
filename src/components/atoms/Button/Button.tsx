import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = "large-primary",
  children,
className,
}) => {
  const baseStyles = "rounded-full font-bold";

  const sizeStyles =
    variant === "large-primary"
      ? "w-40 h-14 bg-transparent text-white outline outline-4 outline-mocha"
      : variant === "large-secondary"
      ? "w-40 h-14 bg-white text-mocha text-lg"
      : variant === "small"
      ? "w-28 h-10 bg-white text-mocha text-sm"
      : "";

  return (
    <button className={`${baseStyles} ${sizeStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
