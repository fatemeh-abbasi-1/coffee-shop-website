// import { useSelector } from "react-redux";

// import { RootState } from "../../../app/store";

// import Section from "../../atoms/Section/Section";
// import NavLink from "../../molecules/NavLink/NavLink";
// import Button from "../../atoms/Button/Button";
// import Hr from "../../atoms/Hr/Hr";
// import Logo from "../../atoms/Logo/Logo";

// import ShoppingCard from "../../../assets/icons/ShoppingCardSvg";
// import { Link } from "react-router-dom";

// const Header: React.FC = () => {
//   const selectedProducts = useSelector(
//     (state: RootState) => state.products.selectedProducts
//   );

//   return (
//     <>
//       <Section height="h-fit" backgroundColor={"bg-main-background-secondary"}>
//         <header className="flex justify-between">
//           <Logo />
//           <div className="flex flex-row gap-20 pt-8 relative">
//             <NavLink variant="header" />
//             <p className="bg-green-500 rounded-full w-7 h-5 font-bold text-center absolute top-6 left-[417px]">
//               {selectedProducts.length}
//             </p>
//             <span className="w-11 h-8 text-white">
//               <Link to={"/card"}>
//                 <ShoppingCard />
//               </Link>
//             </span>
//             <Button variant="large-secondary">
//               <Link to={"/login"}>Login</Link>
//             </Button>
//           </div>
//         </header>
//         <Hr />
//       </Section>
//     </>
//   );
// };

// export default Header;
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

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
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
        <header className="flex justify-between">
          <Logo />
          <div className="flex flex-row gap-20 pt-8 relative items-center">
            <NavLink variant="header" />

            <p className="bg-green-500 rounded-full w-7 h-5 font-bold text-center absolute top-6 left-[417px]">
              {selectedProducts.length}
            </p>

            <span className="w-11 h-8 text-white">
              <Link to={"/card"}>
                <ShoppingCard />
              </Link>
            </span>

            {user ? (
              <div className="flex items-center gap-4">
                <Text>{user.email}</Text>
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
