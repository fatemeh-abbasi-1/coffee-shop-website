import { InputProps } from "./types";
import React from "react";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, onChange, value }, ref) => {
    return (
      <input
        value={value}
        onChange={onChange}
        ref={ref}
        type={type === "text" ? "text" : "password"}
        className="w-96 h-12 bg-mocha rounded-lg text-white p-3 font-bold text-lg"
      />
    );
  }
);

export default Input;
