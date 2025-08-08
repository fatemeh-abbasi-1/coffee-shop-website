import Instagram from "../../../assets/icons/Instagram";
import Telegram from "../../../assets/icons/Telegram";
import WhatsApp from "../../../assets/icons/WhatsApp";

import { SocialLinksProps } from "./types";

const baseStyle = `w-12 text-creamy_white`;

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={`flex gap-8 md:gap-10 ${className}`}>
      <a href="#" className={baseStyle}>
        <Instagram />
      </a>
      <a href="#" className={baseStyle}>
        <Telegram />
      </a>
      <a href="#" className={baseStyle}>
        <WhatsApp />
      </a>
    </div>
  );
};

export default SocialLinks;
