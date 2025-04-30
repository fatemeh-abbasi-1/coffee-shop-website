export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?:
    | "large-primary"
    | "large-secondary"
    | "small-primary"
    | "small-secondary"
    | "icon";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};
