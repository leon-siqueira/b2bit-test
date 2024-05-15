import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import User from './pages/User'
import Notificator from './components/Notificator'

export default function App() {
  const isLoggedIn = localStorage.getItem('accessToken') ? true : false

  return (
    <>
      <Notificator />
      <BrowserRouter>
        <Routes>
          <Route index element={isLoggedIn ? <User/> : <Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
