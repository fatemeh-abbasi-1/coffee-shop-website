import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import Logo from "../../atoms/Logo/Logo";
import NavLink from "../../molecules/NavLink/NavLink";
import Button from "../../atoms/Button/Button";

import ShoppingCard from "../../../assets/icons/ShoppingCard";

const Header: React.FC = () => {
  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  return (
    <>
      <header className="flex justify-between">
        <Logo />
        <div className="flex flex-row gap-20 pt-8 relative">
          <NavLink variant="header" />
          <p className="bg-green-500 rounded-full w-7 h-5 font-bold text-center absolute top-6 left-[417px]">
            {selectedProducts.length}
          </p>
          <span className="w-11 h-8 text-white">
            <ShoppingCard />
          </span>
          <Button variant="large-secondary">Sign Up</Button>
        </div>
      </header>
      <hr className="border border-mocha" />
    </>
  );
};

export default Header;
