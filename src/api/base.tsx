import axios from "axios";


export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json;version=v1_web'
  }
});
