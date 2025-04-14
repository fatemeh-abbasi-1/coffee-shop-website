import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import img from "./../../../assets/images/coffee-cup.png";

const Hero = () => {
  return (
    <div className="pt-28 flex flex-row gap-48">
      <div className="w-1/2 flex flex-col gap-16 pt-6">
        <Text> BIcic Coffee is Awesome</Text>
        <Title>TIME DISCOVER COFFEE HOUSE</Title>
        <Text variant="small">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          mollitia maxime quasi totam cupiditate laudantium maiores sunt
          adipisci facere. Quidem, voluptate fugit! Animi sint aperiam,
          voluptatem delectus libero sit facere!
        </Text>
        <Button variant="large-primary">SHOP NOW</Button>
      </div>
      <img src={img} alt="" className="bg-transparent w-[500px]" />
    </div>
  );
};

export default Hero;
