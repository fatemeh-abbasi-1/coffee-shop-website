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
      variant = "primary",
      error = false,
      errorText,
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor={id}>
          <Text variant="medium">{labelText}</Text>
        </Label>
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
        {error && (
          <Text variant="smaller" className="mt-1 text-red-600">
            {errorText}
          </Text>
        )}
      </div>
    );
  }
);

export default InputWithLable;
