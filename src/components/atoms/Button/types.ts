export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "large-primary" | "large-secondary" | "small" | "icon" | "submit";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};
