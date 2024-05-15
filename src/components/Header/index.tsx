import { useNavigate } from "react-router-dom";
import Button from "../commons/Button";
import useNotify from "../../hooks/useNotify";

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const notify = useNotify();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
    notify({ message: 'Logged out', kind: 'success' });
  }

  return(
    <header className='w-full flex items-center justify-end bg-white p-4 text-white absolute top-0'>
      <div className="w-full max-w-[380px]">
        <Button text='Logout' onClick={() => handleLogout()} />
      </div>
    </header>
  )
}
