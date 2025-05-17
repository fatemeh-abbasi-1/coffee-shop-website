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
      className,
      variant,
    },
    ref
  ) => {
    const style =
      variant === "primary" ? "flex-col gap-1" : "flex justify-between";

    return (
      <div className={`flex ${style}`}>
        <Label htmlFor={id}>
          <Text variant="small">{labelText}</Text>
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
      </div>
    );
  }
);

export default InputWithLable;
