import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const AboutUsContent = () => {
  return (
    <div className="flex flex-col w-[800px] gap-20 p-12">
      <Title>About Us</Title>
      <Text>
        Cofe Coffira is more than just a coffee shop — it's where taste meets
        comfort. We’re passionate about quality and detail, using only the
        finest beans and ingredients to craft drinks and desserts that you’ll
        remember. Whether you're starting your morning or taking a break, we're
        here to deliver café-quality experiences right to you.
      </Text>
      <Button>Shop Now</Button>
    </div>
  );
};

export default AboutUsContent;
