import logo from '../../assets/b2bit.svg';

export default function LoginForm(): JSX.Element{
  return (
    <div>
      <img src={logo} alt="B2bit's logo" />
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
