import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "./dto";

const BASE_URL = process.env.API_URL;

async function postJSON<T>(url: string, payload: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as T & {
    success?: boolean;
    message?: string;
  };

  if (!res.ok || data.success === false) {
    throw new Error(data.message ?? "Request gagal");
  }

  return data as T;
}

export const authQuery = {
  login: (payload: LoginRequest): Promise<LoginResponse> =>
    postJSON<LoginResponse>(`${BASE_URL}/auth/login`, payload),

  register: (payload: RegisterRequest): Promise<RegisterResponse> =>
    postJSON<RegisterResponse>(`${BASE_URL}/auth/register`, payload),
};
