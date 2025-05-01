import React from "react";
import { TitleProps } from "./types";

const Title: React.FC<TitleProps> = ({
  children,
  size = "large",
  className = "",
}) => {
  const baseStyles = "text-white font-bold";

  const sizeStyles = (() => {
    switch (size) {
      case "large":
        return "text-5xl md:text-6xl";
      case "medium":
        return "text-4xl md:text-5xl";
      case "small":
        return "text-2xl md:text-3xl";
      default:
        return "";
    }
  })();

  const combinedClass = `${baseStyles} ${sizeStyles} ${className}`;

  const HeadingTag = size === "large" ? "h1" : "h2";

  return <HeadingTag className={combinedClass}>{children}</HeadingTag>;
};

export default Title;
