export interface IResetPasswordRequest {
  token: string;
  new_password: string;
  confirm_password: string;
}

export interface IResetPasswordResponse {
  [key: string]: unknown;
}

