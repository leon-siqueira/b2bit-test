import { Notification } from "./notification"

export type NotificationContextType = {
  notification: Notification,
  setNotification: (notification: { kind: string | null, message: string | null }) => void
}
