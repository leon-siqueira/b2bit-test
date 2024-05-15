import { useContext, useEffect } from "react"
import { NotificationContext, NotificationContextType } from "../../main"

export default function Notificator(): JSX.Element {
  const { notification, setNotification } = useContext(NotificationContext) as NotificationContextType
  const { message } = notification
  const kind = notification.kind || 'info' as string

  const colorClasses = {
    success: 'bg-secondary',
    error: 'bg-red-200',
    info: 'bg-white',
  } as Record<string, string>

  useEffect(() => {
    const timedFunction = setTimeout(() => {
      setNotification({ kind: null, message: null })
    }, 5000)

    return () => clearTimeout(timedFunction)
  }, [notification])

  if(!message) return <></>

  return (
    <div className={`absolute ${colorClasses[kind]} top-10 m-auto right-0 left-0 max-w-[300px] z-10 p-5 shadow-lg rounded-lg`}>
      <span className="text-lg">{message}</span>
    </div>
  )
}
