import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind.css'
import { Notification } from './types/notification.ts'
import { NotificationContextType } from './types/notificationContextType.ts'


export const NotificationContext = createContext<NotificationContextType | null >(null)

function Main() {
  const [notification, setNotification] = React.useState<Notification>({ kind: null, message: null })

  return (
    <React.StrictMode>
      <NotificationContext.Provider value={{ notification, setNotification }}>
        <App />
      </NotificationContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />)
