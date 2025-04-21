export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "large-primary" | "large-secondary" | "small";
  children: React.ReactNode;
};
