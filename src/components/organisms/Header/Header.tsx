import Logo from "../../atoms/Logo/Logo";
import NavLink from "../../molecules/NavLink/NavLink";
import Button from "../../atoms/Button/Button";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex flex-row justify-between">
        <Logo />
        <div className="flex flex-row gap-20 pt-8">
          <NavLink variant="header" />
          <Button variant="secondary">Sign Up</Button>
        </div>
      </header>
      <hr className="border border-mocha" />
    </>
  );
};

export default Header;
