import { LoginParams } from "../types/loginParams";
import { baseApi } from "./base";
import { ApiInteractionResult } from "../types/apiInteractionResult";


export function login(params: LoginParams) : Promise<ApiInteractionResult> {
  return baseApi.post('/auth/login/', params)
    .then((response) => {
      const tokens = response.data.tokens as Record<string, string>;
      localStorage.setItem('accessToken', tokens.access as string);
      localStorage.setItem('refreshToken',tokens.refresh as string);
      return { success: true }
    })
    .catch((error) => {
      return { success: false, error: error.response}
    })
}
