import { baseApi } from "./base";
import { ApiInteractionResult } from "../types/apiInteractionResult";

export function profile() : Promise<ApiInteractionResult > {
  baseApi.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`
    return config
  }, (error) => {
    return { success: false, error: error.response }
  })

  baseApi.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if(error.response.status === 401) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    }
    return { success: false, error: error.response }
  })

  return baseApi.get('/auth/profile/')
    .then(response => {
      const data = response.data as Record<string, unknown>
      return { success: true, data }
    })
    .catch((error) => {
      return { success: false, error: error.response }
    })

}
