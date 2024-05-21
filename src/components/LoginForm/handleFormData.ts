import { LoginParams } from "../../types/loginParams";

export function handleFormData(elements: HTMLFormControlsCollection) {
  const emailField = elements[0] as HTMLInputElement;
  const passwordField = elements[1] as HTMLInputElement;
  const params : LoginParams = {
    email: emailField.value,
    password: passwordField.value
  }

  return params;
}
