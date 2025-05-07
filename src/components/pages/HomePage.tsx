import MainTemplate from "../templates/MainTemplates/MainTemplate";
import Hero from "../molecules/Hero/Hero";
import ProductsMenuSection from "../organisms/ProductsMenuSection/ProductsMenuSection";
import ServicesSection from "../organisms/ServicesSection/ServicesSection";

const HomePage = () => {
  return (
    <>
      <MainTemplate>
        
        <Hero />
        <ProductsMenuSection />
        <ServicesSection />
      </MainTemplate>
    </>
  );
};

export default HomePage;
