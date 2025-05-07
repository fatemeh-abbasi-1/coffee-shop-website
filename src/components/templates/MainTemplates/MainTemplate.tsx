import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

import { MainTemplateProps } from "./types";

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
