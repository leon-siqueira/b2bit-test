
type ButtonProps = {
  text: string;
  onClick: () => void;
}
export default function Button(props : ButtonProps): JSX.Element{
  const { text, onClick } = props;
  return (
    <div className="flex bg-primary py-3 rounded-md text-white font-bold text-lg cursor-pointer items-center justify-center" onClick={onClick}>
      {text}
    </div>
  )
}
