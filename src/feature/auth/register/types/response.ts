import { IRegisterResponse } from "@/shared/repository/register/dto";

export type RegisterResponse = {
  access_token: string;
  user: IRegisterResponse;
};
