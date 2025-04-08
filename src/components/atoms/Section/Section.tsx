// import React from "react"
import { SectionProps } from "./types";

const Section: React.FC<SectionProps> = ({
  backgroundColor = "bg-main-background-primary",
  height,
  children,
}) => {
  return (
    <section
      className={`${
        backgroundColor ? backgroundColor : "bg-background-secondary"
      } ${height ? `${height}` : "h-dvh"} pr-10 pl-10`}
    >
      {children}
    </section>
  );
};

export default Section;
