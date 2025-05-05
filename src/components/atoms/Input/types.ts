export type InputProps = {
  type: "text" | "password";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
