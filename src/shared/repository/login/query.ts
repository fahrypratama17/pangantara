import type { LoginRequest, LoginResponse } from "./dto";

const BASE_URL = process.env.API_URL;

export const authQuery = {
  login: async (payload: LoginRequest): Promise<LoginResponse> => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data: LoginResponse = await res.json();
    const text = await res.text();
    console.log("RAW RESPONSE:", text);

    if (!res.ok || !data.success) {
      throw new Error(data.message ?? "Login gagal");
    }

    return data;
  },
};
