import { useContext } from "react";
import { NotificationContext } from "../main";
import { Notification } from "../types/notification";
import { NotificationContextType } from "../types/notificationContextType";

export default function useNotify() : (notification: Notification) => void {
  useContext(NotificationContext) as NotificationContextType

  const { setNotification } = useContext(NotificationContext) as NotificationContextType
  const notify = (notification: Notification) => {
    setNotification(notification)
  }

  return notify
}
