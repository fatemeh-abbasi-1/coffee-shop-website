import Logo from "../../atoms/Logo/Logo";
import NavLink from "../NavLink/NavLink";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";


const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-between">
      <Logo />
      <div className="flex flex-row gap-20 pt-8">
        <NavLink variant="header" />
        <Button>
          <Text>Sign Up</Text>
        </Button>
      </div>
    </header>
  );
};

export default Header;
