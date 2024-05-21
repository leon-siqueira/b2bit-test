import { useRef } from 'react';
import logo from '../../assets/b2bit.svg';
import Button from '../commons/Button';
import { LoginParams } from '../../types/loginParams';
import { login } from '../../api/login';
import { handleFormData } from './handleFormData';
import useNotify from '../../hooks/useNotify';
import { useNavigate } from 'react-router-dom';
import { loginErrorMessages } from '../../helpers/loginErrorMessages';

export default function LoginForm(): JSX.Element{
  const inputClasses = 'bg-gray-200 p-4 rounded-md mb-6 text-lg';
  const labelClasses = 'font-bold mb-2 text-lg';

  const formRef = useRef<HTMLFormElement>(null);
  const notify = useNotify()
  const navigate = useNavigate();

  function handleClick(): void{
    if(!formRef.current?.checkValidity()) return;

    const params : LoginParams = handleFormData(formRef.current.elements);

    login(params).then(response => {
      if(response.success) {
        navigate('/');
        notify({ message: 'Logged in', kind: 'success' })
      } else {
        const error = response.error as Record<string, any>
        notify({ message: loginErrorMessages(error.status), kind: 'error' })
      }
    })
  }

  return (
    <div className='flex flex-col bg-white justify-center px-7 py-10 max-w-[440px] w-full shadow-md rounded-2xl mx-2'>
      <img src={logo} alt="B2bit's logo" className='w-full max-w-[310px] mb-8 mt-4 self-center' />
      <form className='flex flex-col' ref={formRef} data-cy="loginForm" onSubmit={e => e.preventDefault()}>
        <label htmlFor="email" className={labelClasses}>E-mail</label>
        <input type="text" id='email' className={inputClasses} placeholder="@gmail.com" required />
        <label htmlFor="password" className={labelClasses}>Password</label>
        <input type="password" id='password' name="password" className={inputClasses} placeholder="********" required />
        <Button text='Sign In' type='submit' cyLabel="signInButton" onClick={() => handleClick()} />
      </form>
    </div>
  )
}
