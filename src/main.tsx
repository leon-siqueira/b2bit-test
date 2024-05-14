import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind.css'

type SessionContextType = {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const SessionContext = createContext<SessionContextType | null>(null)

function Main() {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)

  return (
    <React.StrictMode>
      <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <App />
      </SessionContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />)
