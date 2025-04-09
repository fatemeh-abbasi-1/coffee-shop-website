import Text from "../../atoms/Text/Text";
import { NavLinkProps } from "./types";

const NavLink: React.FC<NavLinkProps> = ({ variant }) => {
  const sizeStyle = variant === "header" ? "pt-4 " : " ";

  return (
    <nav>
      <ul className={`flex flex-row gap-14 ${sizeStyle}`}>
        <Text>
          <li>
            <a href="#">ABOUT US</a>
          </li>
        </Text>
        <Text>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </Text>
      </ul>
    </nav>
  );
};

export default NavLink;
