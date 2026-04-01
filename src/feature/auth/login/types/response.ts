import { ILoginResponse } from "@/shared/repository/login/dto";

export type LoginResponse = {
  access_token: string;
  user: ILoginResponse;
};
