import Section from "../../atoms/Section/Section";
import InfoItem from "../../molecules/InfoItem/InfoItem";
import Text from "../../atoms/Text/Text";
import Hr from "../../atoms/Hr/Hr";

import ContactSvg from "../../../assets/icons/ContactSvg";
import LocationSvg from "../../../assets/icons/LocationSvg";

const Footer = () => {
  return (
    <Section
      backgroundColor={"bg-main-background-secondary"}
      height="h-[500px]"
    >
      <Hr />
      <InfoItem
        icon={
          <span className="w-24 text-white">
            <ContactSvg />
          </span>
        }
        text={<Text>021 35 45 65 76</Text>}
      />
    </Section>
  );
};

export default Footer;
