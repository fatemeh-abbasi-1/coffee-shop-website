import Section from "../../atoms/Section/Section";
import AboutUsContent from "../../molecules/AboutUsContent/AboutUsContent";

const AboutUsSection = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20 py-16 md:py-24 justify-center pb-32 ">
        <img
          src="src/assets/images/CoffeeImage.png"
          alt="coffee-image"
          className="w-full max-w-sm md:max-w-md mt-4 md:mt-8"
        />
        <AboutUsContent />
      </div>
    </Section>
  );
};

export default AboutUsSection;
