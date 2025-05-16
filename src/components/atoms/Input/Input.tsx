import { InputProps } from "./types";
import React from "react";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, onChange, value, onBlur, onFocus, className, variant }, ref) => {
    const baseStyle =
      "h-12 bg-mocha rounded-lg text-white p-3 font-bold text-lg";

    const customStyle = variant === "primary" ? "w-96" : "w-[900px] h-16";

    return (
      <input
        value={value}
        onChange={onChange}
        ref={ref}
        type={type === "text" ? "text" : "password"}
        className={`${customStyle} ${baseStyle} ${className}`}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    );
  }
);

export default Input;
