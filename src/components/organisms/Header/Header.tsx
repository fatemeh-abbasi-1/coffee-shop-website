import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import Section from "../../atoms/Section/Section";
import NavLink from "../../molecules/NavLink/NavLink";
import Button from "../../atoms/Button/Button";
import Hr from "../../atoms/Hr/Hr";
import Logo from "../../atoms/Logo/Logo";

import ShoppingCard from "../../../assets/icons/ShoppingCardSvg";

const Header: React.FC = () => {
  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  return (
    <>
      <Section height="h-fit" backgroundColor={"bg-main-background-secondary"}>
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
        <Hr />
      </Section>
    </>
  );
};

export default Header;
