export type InputProps = {
  variant: "primary" | "secondary";
  type: "text" | "password" | "email";
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: string;
};
