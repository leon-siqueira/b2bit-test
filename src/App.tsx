import { useContext } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import User from './pages/User'
import { SessionContext } from './main'

export default function App() {
  const sessionContext = useContext(SessionContext)

  const isLoggedIn = sessionContext?.isLoggedIn

  return (
    <>
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
