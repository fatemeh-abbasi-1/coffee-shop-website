import { ReactNode } from "react";

export interface SectionProps {
  backgroundColor?: "bg-main-background-secondary" | "bg-main-background-primary";
  height?: string;
  children: ReactNode;
}
