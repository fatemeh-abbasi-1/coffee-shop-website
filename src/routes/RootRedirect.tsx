import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/firebase";

const RootRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
        navigate("/login")
      }
    });

    return () => checkUser();
  }, []);

  return null;
};

export default RootRedirect;
