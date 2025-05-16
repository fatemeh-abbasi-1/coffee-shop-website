import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const AboutUsContent = () => {
  return (
    <div className="flex flex-col w-[800px] gap-16 p-12">
      <Title>About Us</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nihil
        est! Dignissimos fuga excepturi voluptates eos laudantium repellat sequi
        laboriosam inventore est sit neque, in, repudiandae voluptate, rerum
        officia vitae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Iusto, temporibus neque officia ipsa minima labore odio modi! Quo,
        quaerat mollitia alias nihil fugiat cupiditate ad quae debitis
        distinctio, dignissimos soluta!
      </Text>
      <Button>Shop Now</Button>
    </div>
  );
};

export default AboutUsContent;

