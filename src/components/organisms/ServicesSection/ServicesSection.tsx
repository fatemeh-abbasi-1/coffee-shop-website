import { servicesData } from "./servicesData";

import Section from "../../atoms/Section/Section";
import Title from "../../atoms/Title/Title";
import ServicesCard from "../../molecules/ServicesCard/ServicesCard";

const ServicesSection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-28 pt-24">
        <Title size="medium" className="self-center">
          Our Services
        </Title>
        <div className="flex justify-between">
          {servicesData.map((item) => {
            return (
              <ServicesCard Data={item} key={item.id} height={item.height} />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
