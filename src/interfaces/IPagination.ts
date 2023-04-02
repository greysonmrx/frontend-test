export interface IPagination<IData> {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: IData[];
}
