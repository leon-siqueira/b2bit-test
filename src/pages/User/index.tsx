import axios from "axios"
import { useEffect, useState } from "react"
import UserCard from "../../components/UserCard"
import Header from "../../components/Header"

export default function User() {
  const [userInfo, setUserInfo] = useState<Record<string, unknown>>({})

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
      .catch(() => {
        // TODO: handle error
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
