import { servicesData } from "./servicesData";

import Section from "../../atoms/Section/Section";
import Title from "../../atoms/Title/Title";
import ServicesCard from "../../molecules/ServicesCard/ServicesCard";

const ServicesSection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-28 pt-24 pb-40">
        <Title size="large" className="self-center">
          Our Services
        </Title>
        <div className="flex justify-around flex-wrap gap-16">
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
