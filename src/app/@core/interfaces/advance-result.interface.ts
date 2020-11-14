export interface AdvanceResult<T> {
  data: T | T[];
  meta?: {
    totalCount?: number;
    count?: number;
    totalPages?: number;
    currentPage?: number;
    itemsPerPage?: number;
    groupCount?: number;
    summary?: number;
  };
  // links: {
  //   first: string;
  //   previous: string;
  //   next: string;
  //   last: string;
  // };
}
