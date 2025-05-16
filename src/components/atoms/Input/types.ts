export type InputProps = {
  variant: "primary" | "secondary";
  type: "text" | "password";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: React.ReactNode;
};
