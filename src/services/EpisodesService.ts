import { IEpisode } from "@/models/Episode";

import { IPagination } from "@/interfaces/IPagination";

import { APIError } from "@/errors/APIError";

import { HttpClient } from "./utils/HttpClient";

type IGetOneParams = {
  id: number;
};

type IGetAllParams = {
  page: number;
  name?: IEpisode["name"];
};

export class EpisodesService {
  private static httpClient = HttpClient;

  public static async getOne(params: IGetOneParams): Promise<IEpisode> {
    try {
      const response = await this.httpClient.get(`/episode/${params.id}`);

      return response.data;
    } catch (error) {
      const parsedError = error as any;

      let errorMessage = parsedError?.response?.data?.message;

      if (!errorMessage) {
        errorMessage = "An error occurred while trying to list episodes";
      }

      throw new APIError(errorMessage);
    }
  }

  public static async getAll(
    params?: IGetAllParams
  ): Promise<IPagination<IEpisode>> {
    try {
      const response = await this.httpClient.get<IPagination<IEpisode>>(
        `/episode`,
        params
      );

      return response.data;
    } catch (error) {
      const parsedError = error as any;

      let errorMessage = parsedError?.response?.data?.message;

      if (!errorMessage) {
        errorMessage = "An error occurred while trying to list episodes";
      }

      throw new APIError(errorMessage);
    }
  }
}
