import Section from "../../atoms/Section/Section";
import InfoItems from "../InfoItems/InfoItems";
import Hr from "../../atoms/Hr/Hr";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";
// import Logo from "../../atoms/Logo/Logo";

const Footer = () => {
  return (
    <Section
      backgroundColor={"bg-main-background-secondary"}
      height="h-[560px]"
    >
      <Hr />
      <InfoItems />
      <div className="flex pb-32 pt-10">
        <div className="flex flex-col justify-between w-1/2 gap-8 pt-10">
          <Title size="small">About Us</Title>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            nostrum necessitatibus optio eum id earum, dolor quis veniam fuga
            aspernatur.
          </Text>
        </div>
        <div className="flex justify-end w-1/2 items-end ">
          <SocialLinks />
        </div>
      </div>
      <Hr />
      <div className="flex py-5 justify-between">
        {/* <Logo /> */}
        <Text>Logo</Text>
        <Text>Copy Right 2025</Text>
      </div>
    </Section>
  );
};

export default Footer;
