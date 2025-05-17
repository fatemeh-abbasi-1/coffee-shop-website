import Text from "../../atoms/Text/Text";
import ShoppingCard from "../../../assets/icons/ShoppingCardSvg";

const MiniHeader = () => {
  return (
    <header className="flex gap-10 p-8">
      <Text>Logo</Text>
      <span className="w-11 h-8 text-white inline-block">
        <ShoppingCard />
      </span>
    </header>
  );
};

export default MiniHeader;
