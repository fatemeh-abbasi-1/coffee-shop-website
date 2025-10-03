import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { RootState } from "../../../app/store";
import { auth } from "../../../firebase/firebase";
import { signOut, onAuthStateChanged, User } from "firebase/auth";

import Section from "../../atoms/Section/Section";
import NavLink from "../../molecules/NavLink/NavLink";
import Button from "../../atoms/Button/Button";
import Hr from "../../atoms/Hr/Hr";
import Logo from "../../atoms/Logo/Logo";
import ShoppingCard from "../../../assets/icons/ShoppingCardSvg";
import Text from "../../atoms/Text/Text";

const Header: React.FC = () => {
  const selectedProducts = useSelector(
    (state: RootState) => state.products.selectedProducts
  );

  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const exisistUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => exisistUser();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <Section height="h-fit" backgroundColor={"bg-main-background-secondary"}>
        <header className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 md:gap-12 px-4 py-3">
          {/* Logo */}
          <div className="flex justify-center">
            <Logo />
          </div>

          {/* Nav + Shopping cart + Auth */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6 md:gap-12">
            {/* Nav Links */}
            <NavLink />

            {/* Cart */}
            <div className="relative flex items-center justify-center">
              <Link
                to={"/card"}
                className="relative w-10 h-10 flex items-center justify-center text-white"
              >
                <ShoppingCard />
                {/* Badge inside the same container */}
                <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {selectedProducts.length}
                </span>
              </Link>
            </div>

            {/* Auth Buttons */}
            {user ? (
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-6">
                <Text variant="medium">{user.email?.slice(0, 6)}</Text>
                <Button variant="large-secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button variant="large-secondary">
                <Link to={"/login"}>Login</Link>
              </Button>
            )}
          </div>
        </header>

        <Hr />
      </Section>
    </>
  );
};

export default Header;
