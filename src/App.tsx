import Section from "./components/atoms/Section/Section";
import Hero from "./components/molecules/Hero/Hero";
import ProductsMenuSection from "./components/organisms/ProductsMenuSection/ProductsMenuSection";
import Header from "./components/organisms/Header/Header";

function App() {
  return (
    <>
      <Section>
        <Header />
        <Hero />
      </Section>
      <Section backgroundColor={"bg-main-background-secondary"}>
        
       <ProductsMenuSection />
      </Section>
    </>
  );
}

export default App;
