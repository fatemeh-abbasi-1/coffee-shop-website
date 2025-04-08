import React from "react";
import { TextProps } from "./types";

const Text: React.FC<TextProps> = ({
  children,
  variant = "medium",
  className = "",
}) => {
  const baseStyles = "text-gray-800";
  const sizeStyles =
    variant === " large "
      ? "text-lg md:text-xl"
      : variant === "small"
      ? "text-sm md:text-base"
      : "text-base md:text-lg";

  const combinedClass = `${baseStyles} ${sizeStyles} ${className}`;

  return <p className={combinedClass}>{children}</p>;
};

export default Text;
