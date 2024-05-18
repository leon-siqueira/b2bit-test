import { useNavigate } from "react-router-dom";
import Button from "../../components/commons/Button";

export default function NotFound() : JSX.Element {
  const navigate = useNavigate();


  return (
    <div className="flex items-center justify-center min-h-dvh flex-col">
      <div className="bg-primary-yellow px-10 py-4 rounded-2xl">
        <h2 className="text-9xl font-bold text-primary-blue">404</h2>
      </div>
      <div className="mt-5">
        <h3 className="text-3xl font-bold text-center mb-3">Page not found
        </h3>
        <Button text='Return to the homepage' onClick={() => { navigate('/') }} />
      </div>
    </div>
  )
}
