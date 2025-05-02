import { InfoItemProps } from "./types";

const InfoItem: React.FC<InfoItemProps> = ({ icon, text }) => {
  return (
    <a href="#" className="flex gap-4">
      <span className="flex  w-10 text-white">{icon}</span>
      {text}
    </a>
  );
};

export default InfoItem;
