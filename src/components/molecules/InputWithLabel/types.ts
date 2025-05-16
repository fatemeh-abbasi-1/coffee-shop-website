export interface InputWithLableProps {
  variant: "primary" | "secondary";
  type: "text" | "password";
  labelText: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: React.ReactNode;
}
