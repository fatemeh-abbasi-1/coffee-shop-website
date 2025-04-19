// import React from "react";
// import { TitleProps } from "./types";

// const Title: React.FC<TitleProps> = ({
//   children,
//   size = "large",
//   className = "",
// }) => {
//   const baseStyles = " text-white font-bold ";
//   const sizeStyles =
//     size === "large" ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl";

//   const combinedClass = `${baseStyles} ${sizeStyles} ${className}`;

//   return size === "large" ? (
//     <h1 className={combinedClass}>{children}</h1>
//   ) : (
//     <h2 className={combinedClass}>{children}</h2>
//   );
// };

// export default Title;
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
        return "text-4xl md:text-5xl"; // همون استایل قبلی small
      case "small":
        return "text-2xl md:text-3xl"; // کوچیک‌تر از medium
      default:
        return "";
    }
  })();

  const combinedClass = `${baseStyles} ${sizeStyles} ${className}`;

  const HeadingTag = size === "large" ? "h1" : "h2";

  return <HeadingTag className={combinedClass}>{children}</HeadingTag>;
};

export default Title;
