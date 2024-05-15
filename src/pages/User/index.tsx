import axios from "axios"
import { useEffect, useState } from "react"
import UserCard from "../../components/UserCard"

export default function User() {
  const [userInfo, setUserInfo] = useState<Record<string, unknown>>({})

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}/auth/profile/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('tokens')}`,
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
      {/* TODO: Logout Header */}
      <div className="flex items-center justify-center h-screen bg-secondary">
        <UserCard userInfo={userInfo} />
      </div>
    </>
  )
}
