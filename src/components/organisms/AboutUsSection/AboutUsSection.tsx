import Section from "../../atoms/Section/Section";
import AboutUsContent from "../../molecules/AboutUsContent/AboutUsContent";

const AboutUsSection = () => {
  return (
    <Section height="h-fit">
      <div className="flex justify-between py-28">
        <img
          src="src/assets/images/CoffeeImage.png"
          alt="coffee-image"
          className="w-[500px] mt-8"
        />
        <AboutUsContent />
      </div>
    </Section>
  );
};

export default AboutUsSection;
