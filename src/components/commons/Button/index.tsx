import { ButtonProps } from "../../../types/buttonProps";

export default function Button(props : ButtonProps): JSX.Element{
  const { text, type, cyLabel, onClick } = props;
  return (
    <button data-cy={cyLabel || ''}  type={type || "button"} className="flex bg-primary-blue py-3 px-4 rounded-md text-white font-bold text-lg cursor-pointer items-center justify-center w-full" onClick={onClick}>
      {text}
    </button>
  )
}
