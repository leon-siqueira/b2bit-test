import axios from "axios"
import { useState } from "react"
import UserCard from "../../components/UserCard"
import Bottleneck from "bottleneck"

export default function User() {
  const [userInfo, setUserInfo] = useState<Record<string, unknown>>({})

  const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 333
  })

  const request = () => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}/auth/profile/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('tokens')}`,
        'Accept': 'application/json;version=v1_web'
      }
    })
      .then(response => {
        setUserInfo(response.data)
      })
      .catch(() => {
        // TODO: handle error
      })
  }

  limiter.schedule(async () => request)

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-secondary">
        <UserCard userInfo={userInfo} />
      </div>
    </>
  )
}
