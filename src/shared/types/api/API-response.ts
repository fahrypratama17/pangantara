export type ApiResponse<T> =
  | { success: true; data: T; message: string }
  | { success: false; error: string; message: string };

export interface BackendResponse<T> {
  data: T;
  meta: null;
}
