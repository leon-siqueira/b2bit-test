import { useContext, useEffect } from "react"
import { NotificationContext } from "../../main"
import CloseIcon from '../../assets/close.svg'
import { NotificationContextType } from "../../types/notificationContextType"

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
    <div data-cy="notification" className={`absolute ${colorClasses[kind]} top-10 m-auto right-0 left-0 max-w-[300px] z-10 p-5 shadow-lg rounded-lg`}>
      <img src={CloseIcon} alt="Close notification" className="absolute w-3 top-4 right-4 cursor-pointer" onClick={() => setNotification({kind: null, message: null})} />
      <span className="text-lg">{message}</span>
    </div>
  )
}
