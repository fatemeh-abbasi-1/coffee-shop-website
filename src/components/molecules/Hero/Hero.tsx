import Section from "../../atoms/Section/Section";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import Image from "../../atoms/Image/Image";
import img from "./../../../assets/images/coffee-cup.png";

const Hero = () => {
  return (
    <Section>
      <div className="pt-10 flex flex-col-reverse md:flex-row md:pt-24 items-center gap-16 md:gap-6 lg:gap-48">
        <div className="w-full lg:w-1/2 flex flex-col gap-24 pt-12 px-2 ">
          <Title size="large">
            Welcome to Cofe Coffira – Where Every Sip Tells a Story
          </Title>
          <Text variant="small">
            At Cofe Coffira, your favorite coffee or cool drink is just a click
            away. Order online and get it delivered to your door – fresh, fast,
            and full of flavor.
          </Text>
          <Button variant="large-primary">Order Now</Button>
        </div>
        <Image
          src={img}
          className="w-full md:w-[400px] lg:w-[500px] max-w-[490px] px-3 lg:pr-2"
        />
      </div>
    </Section>
  );
};

export default Hero;

