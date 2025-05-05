import React from "react";

import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";

import { InputWithLableProps } from "./types";

const InputWithLable = React.forwardRef<HTMLInputElement, InputWithLableProps>(
  ({ type, labelText, id,onChange,value }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={id}>
          <Text variant="small">{labelText}</Text>
        </label>
        <Input type={type} ref={ref} onChange={onChange} value={value} />
      </div>
    );
  }
);

export default InputWithLable;
