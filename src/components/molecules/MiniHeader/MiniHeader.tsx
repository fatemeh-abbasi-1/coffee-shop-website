import Logo from "../../atoms/Logo/Logo";
import ShoppingCard from "../../../assets/icons/ShoppingCardSvg";

const MiniHeader = () => {
  return (
    <header className="flex gap-10 p-8">
      <Logo className="-mt-8"/>
      <span className="w-11 h-8 text-white inline-block mt-2">
        <ShoppingCard />
      </span>
    </header>
  );
};

export default MiniHeader;
