import Trash from "../../../assets/icons/Trash";
import Plus from "../../../assets/icons/plus";
import Text from "../../atoms/Text/Text";

const NumberProductSelected = () => {
  return (
    <div className="flex gap-4">
      <span className="text-white mt-1 text-2xl">
        <Trash />
      </span>
      <Text> 12 </Text>
      <span className="text-white mt-1">
        <Plus />
      </span>
    </div>
  );
};

export default NumberProductSelected;
