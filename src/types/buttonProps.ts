export type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  cyLabel?: string;
  onClick: () => void;
}
