export type ApiResponse<T> =
  | { success: true; data: T; message: string }
  | { success: false; error: string; message: string };

export interface BackendResponse<T> {
  data: T;
  meta: null;
}

export type PaginationMeta = {
  total_data: number;
  current_page: number;
  total_page: number;
  per_page: number;
  next_page: number | null;
  prev_page: number | null;
};
