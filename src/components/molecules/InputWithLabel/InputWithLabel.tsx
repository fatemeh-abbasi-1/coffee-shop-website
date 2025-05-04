import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";

import { InputWithLableProps } from "./types";

const InputWithLable: React.FC<InputWithLableProps> = ({
  type,
  labelText,
  id,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>
        <Text variant="small">{labelText}</Text>
      </label>
      <Input type={type} />
    </div>
  );
};

export default InputWithLable;
