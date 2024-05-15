import { useContext } from "react";
import { NotificationContext, NotificationContextType, NotificationType } from "../main";

export default function useNotify() : (notification: NotificationType) => void {
  useContext(NotificationContext) as NotificationContextType

  const { setNotification } = useContext(NotificationContext) as NotificationContextType

  const notify = (notification: NotificationType) => {
    setNotification(notification)
  }

  return notify
}
