// import  { forwardRef } from "react";
// import { TextProps } from "./types";

// const Text: forwardRef<HTMLParagraphElement,TextProps> = ({
//   children,
//   variant = "medium",
//   className = "",
//   ref,
// }) => {
//   const baseStyles = "text-white text-gray-800";
//   const sizeStyles =
//     variant === " large "
//       ? " text-lg md:text-3xl"
//       : variant === "small"
//       ? "text-sm md:text-xl"
//       : "text-base md:text-2xl";

//   const combinedClass = `${baseStyles} ${sizeStyles} ${className}`;

//   return <p className={combinedClass} ref={ref}>{children}</p>;
// };

// export default Text;
import React, { forwardRef } from "react";
import { TextProps } from "./types";

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, variant = "medium", className = "" }, ref) => {
    const baseStyles = "text-white text-gray-800";

    const sizeStyles =
      variant === "large"
        ? "text-lg md:text-3xl"
        : variant === "small"
        ? "text-sm md:text-xl"
        : "text-base md:text-2xl";

    const combinedClass = `${baseStyles} ${sizeStyles} ${className}`;

    return (
      <p ref={ref} className={combinedClass}>
        {children}
      </p>
    );
  }
);

export default Text;
