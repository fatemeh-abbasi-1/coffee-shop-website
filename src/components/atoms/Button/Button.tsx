import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = "large-primary",
  children,
  className,
  disabled = false,
}) => {
  const baseStylesPrimary =
    "rounded-full font-bold outline outline-4 outline-mocha text-white";
  const baseStylesSecondary = "rounded-full font-bold  bg-white text-mocha";

  const sizeStyles =
    variant === "large-primary"
      ? `w-40 h-14 bg-transparent text-lg ${baseStylesPrimary}`
      : variant === "large-secondary"
      ? `w-40 h-14  text-lg ${baseStylesSecondary}`
      : variant === "small"
      ? `w-28 h-10  text-sm ${baseStylesSecondary}`
      : variant === "submit"
      ? `w-96 h-14 bg-mocha font-bold rounded-lg`
      : variant === "icon"
      ? "w-12 h-12 bg-white p-3 text-mocha rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      : "";

  return (
    <button
      className={`${sizeStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
