export type InputProps = {
  type: "text" | "password";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: React.ReactNode;
};
