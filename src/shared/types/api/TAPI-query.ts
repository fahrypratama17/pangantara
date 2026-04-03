export type TAPIQuery<T = unknown> = Record<
  string,
  string | number | boolean | T[] | undefined
>;
