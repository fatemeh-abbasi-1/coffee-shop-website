import InfoItem from "../../molecules/InfoItem/InfoItem";
import Text from "../../atoms/Text/Text";

import ContactSvg from "../../../assets/icons/ContactSvg";
import LocationSvg from "../../../assets/icons/LocationSvg";

const InfoItems = () => {
  return (
    <div className="flex gap-40 pt-20 justify-center ">
      <InfoItem
        icon={<ContactSvg />}
        text={<Text>Telephone : +98 021 35 45 65 76</Text>}
      />
      <InfoItem icon={<LocationSvg />} text={<Text>Iran , Tehran</Text>} />
    </div>
  );
};

export default InfoItems;
