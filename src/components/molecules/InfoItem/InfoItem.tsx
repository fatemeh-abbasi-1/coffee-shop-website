import { InfoItemProps } from "./types";

const InfoItem: React.FC<InfoItemProps> = ({ icon, text }) => {
  return (
    <a href="#">
      {icon}
      {text}
    </a>
  );
};

export default InfoItem;
