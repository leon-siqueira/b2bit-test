import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind.css'

export type NotificationType = {
  kind: string | null,
  message: string | null
}

export type NotificationContextType = {
  notification: NotificationType,
  setNotification: (notification: { kind: string | null, message: string | null }) => void
}

export const NotificationContext = createContext<NotificationContextType | null>(null)

function Main() {
  const [notification, setNotification] = React.useState<NotificationType>({ kind: null, message: null })

  return (
    <React.StrictMode>
      <NotificationContext.Provider value={{ notification, setNotification }}>
        <App />
      </NotificationContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />)
