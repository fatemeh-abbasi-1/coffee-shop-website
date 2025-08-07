import React from "react";

import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";
import Label from "../../atoms/Label/Label";

import { InputWithLableProps } from "./types";

const InputWithLable = React.forwardRef<HTMLInputElement, InputWithLableProps>(
  (
    {
      type,
      labelText,
      id,
      onChange,
      placeholder,
      value,
      onBlur,
      onFocus,
      className = "",
      variant,
      error = false,
      errorText,
    },
    ref
  ) => {
    const style =
      variant === "primary" ? "flex-col gap-1" : "flex justify-between";

    return (
      <div className={`flex ${style}`}>
        <Label htmlFor={id} className={variant !== "primary" ? "mt-4" : ""}>
          <Text variant="medium">{labelText}</Text>
        </Label>
        <div className="flex flex-col">
          <Input
            variant={variant}
            className={className}
            type={type}
            ref={ref}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
          />
          {error && <Text variant="smaller" className="mt-1">{errorText}</Text>}
        </div>
      </div>
    );
  }
);

export default InputWithLable;
