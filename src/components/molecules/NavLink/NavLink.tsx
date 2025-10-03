import { Link } from "react-router-dom";

import Text from "../../atoms/Text/Text";

const NavLink = () => {
  return (
    <nav>
      <ul className={`flex flex-row gap-14 font-bold`}>
        <Text>
          <li>
            <Link to={"/about-us"}>ABOUT US</Link>
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
