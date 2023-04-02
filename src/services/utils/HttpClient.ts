import Axios, { AxiosResponse } from "axios";

export class HttpClient {
  private static client = Axios.create({
    baseURL: "https://rickandmortyapi.com/api",
  });

  public static get<T = any>(
    url: string,
    queryParams?: Record<string, string | number>
  ): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, {
      params: queryParams,
    });
  }
}
