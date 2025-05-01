import Instagram from "../../../assets/icons/Instagram";
import Telegram from "../../../assets/icons/Telegram";
import WhatsApp from "../../../assets/icons/WhatsApp";

import { SocialLinksProps } from "./types";

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Instagram />
      <Telegram />
      <WhatsApp />
    </div>
  );
};

export default SocialLinks;
