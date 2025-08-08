import Section from "../../atoms/Section/Section";
import InfoItems from "../InfoItems/InfoItems";
import Hr from "../../atoms/Hr/Hr";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";
import Logo from "../../atoms/Logo/Logo";
// import Logo from "../../atoms/Logo/Logo";

const Footer = () => {
  return (
    <Section
      backgroundColor={"bg-main-background-secondary"}
      height="h-full md:h-[750px] xl:h-[670px]"
    >
      <Hr />
      <div className="flex flex-col md:flex-row justify-center">
        <InfoItems />
      </div>

      <div className="flex flex-col-reverse md:flex-row pb-32 pt-24 md:pt-10 items-center gap-16 md:gap-10">
        <div className="flex flex-col justify-between w-10/12 md:w-1/2 gap-8 pt-10">
          <Title size="small">About Us</Title>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            nostrum necessitatibus optio eum id earum, dolor quis veniam fuga
            aspernatur.
          </Text>
        </div>
        <div className="flex justify-end w-1/2 md:items-end ">
          <SocialLinks />
        </div>
      </div>

      <div className="flex pt-2 justify-between items-center gap-3 ">
        <Logo />
        <Text>Copy Right 2025</Text>
      </div>
    </Section>
  );
};

export default Footer;
