import { TextProps } from "./types";

const Text: React.FC<TextProps> = ({
  children,
  variant = "medium",
  className = "",
}) => {
  const baseStyles = "text-creamy_white";

  const sizeStyles =
    variant === "large"
      ? "text-lg md:text-3xl"
      : variant === "medium"
      ? "text-base md:text-2xl"
      : variant === "small"
      ? "text-sm md:text-xl"
      : "text-sm bg-transparent rounded-full px-2 text-white";

  const combinedClass = `${baseStyles} ${sizeStyles} ${className}`;

  return <p className={combinedClass}>{children}</p>;
};

export default Text;
