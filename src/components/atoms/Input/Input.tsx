import React from "react";
import { InputProps } from "./types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      onChange,
      value,
      placeholder,
      onBlur,
      onFocus,
      className = "",
      variant = "primary",
    },
    ref
  ) => {
    const baseStyle =
      "w-full rounded-lg text-white font-bold text-lg focus:outline-none";

    const customStyle =
      variant === "primary"
        ? "bg-mocha h-14 p-3"
        : "border-b border-creamy_white bg-transparent p-2";

    return (
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        className={`${baseStyle} ${customStyle} ${className}`}
      />
    );
  }
);

export default Input;
