import { TextProps } from "./types";

const Text: React.FC<TextProps> = ({
  children,
  variant = "medium",
  className = "",
}) => {
  const baseStyles = "text-white text-gray-800";

  const sizeStyles =
    variant === " large "
      ? "text-lg md:text-3xl"
      : variant === "small"
      ? "text-sm md:text-xl"
      : "text-base md:text-2xl";

  const combinedClass = `${baseStyles} ${sizeStyles} ${className}`;

  return <p className={combinedClass}>{children}</p>;
};

export default Text;
