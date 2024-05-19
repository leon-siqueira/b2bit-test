import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import useNotify from "../../hooks/useNotify";

export default function User() {
  const notify = useNotify()
  const navigate = useNavigate()

  if(localStorage.getItem('accessToken')) {
    notify({ message: 'You are already logged in.', kind: 'info' })
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center min-h-dvh bg-gray-100">
      <LoginForm />
    </div>
  )
}
