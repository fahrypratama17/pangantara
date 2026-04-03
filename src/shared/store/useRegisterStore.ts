import { create } from "zustand";
import { Roles } from "@/shared/lib/auth/role";

type RegisterFields = {
  name: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
  role: Roles;
};

type RegisterState = RegisterFields & {
  setField: <K extends keyof RegisterFields>(
    field: K,
    value: RegisterFields[K],
  ) => void;
  reset: () => void;
};

export const useRegisterStore = create<RegisterState>((set) => ({
  name: "",
  email: "",
  address: "",
  password: "",
  confirmPassword: "",
  role: Roles.sppg,

  setField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),

  reset: () =>
    set({
      name: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
      role: Roles.sppg,
    }),
}));
