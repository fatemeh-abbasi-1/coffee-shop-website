import { Link } from "react-router-dom";

import Text from "../../atoms/Text/Text";
import { NavLinkProps } from "./types";

const NavLink: React.FC<NavLinkProps> = ({ variant }) => {
  const sizeStyle = variant === "header" ? "pt-4 " : " ";

  return (
    <nav>
      <ul className={`flex flex-row gap-14 font-bold ${sizeStyle}`}>
        <Text>
          <li>
            <Link to={"/about"}>ABOUT US</Link>
          </li>
        </Text>
        <Text>
          <li>
            <Link to={"/contact-us"}>CONTACT US</Link>
          </li>
        </Text>
      </ul>
    </nav>
  );
};

export default NavLink;
