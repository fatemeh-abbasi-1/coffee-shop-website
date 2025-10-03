export interface InputWithLableProps {
  variant: "primary" | "secondary";
  type: "text" | "password" | "email";
  labelText: string;
  id: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: string;
  error?: boolean | string;
  errorText?: string;
}
