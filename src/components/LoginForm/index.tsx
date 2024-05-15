import { useRef } from 'react';
import logo from '../../assets/b2bit.svg';
import Button from '../commons/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type LoginParams = {
  email: string;
  password: string;
}
export default function LoginForm(): JSX.Element{
  const inputClasses = 'bg-gray-200 p-4 rounded-md mb-6 text-lg';
  const labelClasses = 'font-bold mb-2 text-lg';

  const formRef = useRef<HTMLFormElement>(null);

  const navigate = useNavigate();

  function handleClick(): void{
    const elements : HTMLFormControlsCollection | undefined = formRef.current?.elements;

    if(!elements) return;

    const emailField = elements[0] as HTMLInputElement;
    const passwordField = elements[1] as HTMLInputElement;
    const params : LoginParams = {
      email: emailField.value,
      password: passwordField.value
    }

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json;version=v1_web'
    }

    axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/login/`, params, {headers})
      .then(response => {
        const tokens = response.data.tokens as Record<string, string>;
        localStorage.setItem('accessToken', tokens.access as string);
        localStorage.setItem('refreshToken',tokens.refresh as string);
        navigate('/user');
      })
      .catch(() => {
        // TODO: handle error. I'm thinking of a global notification component
    })
  }

  return (
    <div className='flex flex-col bg-white justify-center px-7 py-10 max-w-[440px] w-full shadow-md rounded-md'>
      <img src={logo} alt="B2bit's logo" className='w-full max-w-[310px] mb-8 mt-4 self-center' />
      <form className='flex flex-col' ref={formRef} onSubmit={e => e.preventDefault()}>
        <label htmlFor="email" className={labelClasses}>E-mail</label>
        <input type="text" id='email' className={inputClasses} placeholder="@gmail.com" required />
        <label htmlFor="password" className={labelClasses}>Password</label>
        <input type="password" id='password' name="password" className={inputClasses} placeholder="********" required />
        <Button text='Sign In' onClick={() => handleClick()} />
      </form>
    </div>
  )
}
