export interface OffsetPaginationResponse<T> {
  dtoList: T;
  meta: OffsetPaginationMeta;
}

export interface OffsetPaginationMeta {
  end: number;
  next: boolean;
  page: number;
  pageList: number[];
  prev: boolean;
  size: number;
  start: number;
  totalCount: number;
  totalPage: number;
}
