export interface CursorPaginationResponse<T> {
  dtoList: T;
  meta: CursorPaginationMeta;
}

export interface CursorPaginationMeta {
  count: number;
  next: boolean;
}
