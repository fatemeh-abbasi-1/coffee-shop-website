import { SectionProps } from "./types";

const Section: React.FC<SectionProps> = ({
  backgroundColor = "bg-main-background-primary",
  height,
  children,
}) => {
  return (
    <section
      className={`${
        backgroundColor ? backgroundColor : "bg-background-main-secondary"
      } ${
        height ? `${height}` : "min-h-[100svh]"
      } w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32`}
    >
      {children}
    </section>
  );
};

export default Section;
