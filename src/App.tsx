import Section from "./components/atoms/Section/Section";
import Hero from "./components/molecules/Hero/Hero";
import ProductsMenuSection from "./components/organisms/ProductsMenuSection/ProductsMenuSection";
import Header from "./components/organisms/Header/Header";
import ServicesSection from "./components/organisms/ServicesSection/ServicesSection";

function App() {
  return (
    <>
      <Section>
        <Header />
        <Hero />
      </Section>

      <ProductsMenuSection />

      <ServicesSection />
    </>
  );
}

export default App;
