import { useEffect, useState } from "react"
import UserCard from "../../components/UserCard"
import Header from "../../components/Header"
import useNotify from "../../hooks/useNotify"
import { commonErrorMessages } from "../../helpers/commonErrorMessages"
import { useNavigate } from "react-router-dom"
import { profile } from "../../api/profile"

export default function User() {
  const [userInfo, setUserInfo] = useState<Record<string, unknown>>({})

  const notify = useNotify()
  const navigate = useNavigate()

  if (!localStorage.getItem('accessToken')) {
    notify({ message: commonErrorMessages(401), kind: 'error' })
    navigate('/')
  }

  useEffect(() => {
    profile().then(response => {
      if(response.success) {
        const data = response.data as Record<string, unknown>
        setUserInfo(data)
      } else {
        const error = response.error as Record<string, unknown>
        const status = error.status as number
        notify({ message: commonErrorMessages(status), kind: 'error' })
      }
    })
  }, [])

  return (
    <>
      <div className="flex flex-wrap items-center justify-center min-h-dvh bg-secondary relative">
        <Header />
        <UserCard userInfo={userInfo} />
      </div>
    </>
  )
}
