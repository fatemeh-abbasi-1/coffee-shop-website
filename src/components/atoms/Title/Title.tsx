import React from "react";
import { TitleProps } from "./types";

const Title: React.FC<TitleProps> = ({
  children,
  size = "large",
  className = "",
}) => {
  const baseStyles = "font-bold";
  const sizeStyles = size === "large" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl";

  const combinedClass = `${baseStyles} ${sizeStyles} ${className}`;

  return size === "large" ? (
    <h1 className={combinedClass}>{children}</h1>
  ) : (
    <h2 className={combinedClass}>{children}</h2>
  );
};

export default Title;
