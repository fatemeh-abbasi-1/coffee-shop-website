import Section from "../../atoms/Section/Section";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import img from "./../../../assets/images/coffee-cup.png";

const Hero = () => {
  return (
    <Section>
      <div className="pt-28 flex flex-col md:flex-row gap-48">
        <div className="w-1/2 flex flex-col gap-20 pt-6">
          <Text>Cofe Coffira</Text>
          <Title size="medium">Welcome to Cofe Coffira – Where Every Sip Tells a Story</Title>
          <Text variant="small">
            At Cofe Coffira, your favorite coffee or cool drink is just a click
            away. Order online and get it delivered to your door – fresh, fast,
            and full of flavor.
          </Text>
          <Button variant="large-primary">Order Now</Button>
        </div>
        <img src={img} alt="" className="bg-transparent w-[500px]" />
      </div>
    </Section>
  );
};

export default Hero;
