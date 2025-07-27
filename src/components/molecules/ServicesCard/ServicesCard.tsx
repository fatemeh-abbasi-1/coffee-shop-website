import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";

import { ServicesSectionProps } from "./types";

const ServicesCard: React.FC<ServicesSectionProps> = ({ Data, height }) => {
  return (
    <div
      className={`border-4 border-mocha bg-dark_brown w-[420px] h-[${height}px] flex flex-col items-center rounded-3xl`}
    >
      <img src={Data.imgSrc} alt="" className="w-full h-60 rounded-t-3xl" />
      <div className="py-5 px-6 flex flex-col items-center gap-2">
        <Title size="small">{Data.title}</Title>
        <Text>{Data.description}</Text>
      </div>
    </div>
  );
};

export default ServicesCard;
