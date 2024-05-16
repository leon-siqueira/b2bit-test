import axios from "axios"
import { useEffect, useState } from "react"
import UserCard from "../../components/UserCard"
import Header from "../../components/Header"
import useNotify from "../../hooks/useNotify"
import { commonErrorMessages } from "../../helpers/commonErrorMessages"
import { useNavigate } from "react-router-dom"

export default function User() {
  const [userInfo, setUserInfo] = useState<Record<string, unknown>>({})

  const notify = useNotify()
  const navigate = useNavigate()

  if (!localStorage.getItem('accessToken')) {
    notify({ message: commonErrorMessages(401), kind: 'error' })
    navigate('/')
  }

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}/auth/profile/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Accept': 'application/json;version=v1_web'
        }
      })
      .then(response => {
        const data = response.data as Record<string, unknown>
        setUserInfo(data)
      })
      .catch((error) => {
        notify({message: commonErrorMessages(error.response.status), kind: 'error' })
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        navigate('/')
      })
    }, [])

  return (
    <>
      <div className="flex flex-wrap items-center justify-center h-screen bg-secondary relative">
        <Header />
        <UserCard userInfo={userInfo} />
      </div>
    </>
  )
}
