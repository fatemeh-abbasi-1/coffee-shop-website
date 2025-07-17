import React from "react";
import { InputProps } from "./types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { type, onChange, value, placeholder, onBlur, onFocus, className, variant },
    ref
  ) => {
    const customStyle =
      variant === "primary"
        ? "w-96 h-14 bg-mocha rounded-lg text-white p-3 font-bold text-lg"
        : "w-[800px] border-b border-creamy_white bg-transparent text-white font-bold text-lg focus:outline-none p-2";

    

    return (
      <input
        value={value}
        onChange={onChange}
        ref={ref}
        type={type === "text" ? "text" : "password"}
        className={`${customStyle} ${className}`}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
      />
    );
  }
);

export default Input;
