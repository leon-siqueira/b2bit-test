
type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  cyLabel?: string;
  onClick: () => void;
}
export default function Button(props : ButtonProps): JSX.Element{
  const { text, type, cyLabel, onClick } = props;
  return (
    <button data-cy={cyLabel || ''}  type={type || "button"} className="flex bg-primary py-3 rounded-md text-white font-bold text-lg cursor-pointer items-center justify-center w-full" onClick={onClick}>
      {text}
    </button>
  )
}
