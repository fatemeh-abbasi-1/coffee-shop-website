import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";

import { ServicesSectionProps } from "./types";

const ServicesCard: React.FC<ServicesSectionProps> = ({ Data, height }) => {
  return (
    <div
      className={`outline-dashed p-3 md:p-6 outline-creamy_white bg-dark_brown w-[420px] h-[${height}px] flex flex-col items-center rounded-3xl`}
    >
      <img src={Data.imgSrc} alt="" className="mt-2 w-44 h-40 md:w-56 md:h-48  rounded-full" />
      <div className=" p-4 md:p-6 flex flex-col items-center gap-2">
        <Title size="small">{Data.title}</Title>
        <Text>{Data.description}</Text>
      </div>
    </div>
  );
};

export default ServicesCard;
