import { ILocation } from "@/models/Location";

import { IPagination } from "@/interfaces/IPagination";

import { APIError } from "@/errors/APIError";

import { HttpClient } from "./utils/HttpClient";

type IGetOneParams = {
  id: number;
};

type IGetAllParams = {
  page: number;
  name?: ILocation["name"];
};

export class LocationsService {
  private static httpClient = HttpClient;

  public static async getOne(params: IGetOneParams): Promise<ILocation> {
    try {
      const response = await this.httpClient.get(`/location/${params.id}`);

      return response.data;
    } catch (error) {
      const parsedError = error as any;

      let errorMessage = parsedError?.response?.data?.message;

      if (!errorMessage) {
        errorMessage = "An error occurred while trying to list locations";
      }

      throw new APIError(errorMessage);
    }
  }

  public static async getAll(
    params?: IGetAllParams
  ): Promise<IPagination<ILocation>> {
    try {
      const response = await this.httpClient.get<IPagination<ILocation>>(
        `/location`,
        params
      );

      return response.data;
    } catch (error) {
      const parsedError = error as any;

      let errorMessage = parsedError?.response?.data?.message;

      if (!errorMessage) {
        errorMessage = "An error occurred while trying to list locations";
      }

      throw new APIError(errorMessage);
    }
  }
}
