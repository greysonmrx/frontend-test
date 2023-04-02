import {
  ICharacter,
  ICharacterGender,
  ICharacterStatus,
} from "@/models/Character";

import { IPagination } from "@/interfaces/IPagination";

import { APIError } from "@/errors/APIError";

import { HttpClient } from "./utils/HttpClient";

type IGetOneParams = {
  id: number;
};

type IGetAllParams = {
  page: number;
  name?: ICharacter["name"];
  status?: ICharacterStatus;
  gender?: ICharacterGender;
};

export class CharactersService {
  private static httpClient = HttpClient;

  public static async getOne(params: IGetOneParams): Promise<ICharacter> {
    try {
      const response = await this.httpClient.get(`/character/${params.id}`);

      return response.data;
    } catch (error) {
      const parsedError = error as any;

      let errorMessage = parsedError?.response?.data?.message;

      if (!errorMessage) {
        errorMessage = "An error occurred while trying to list characters";
      }

      throw new APIError(errorMessage);
    }
  }

  public static async getAll(
    params?: IGetAllParams
  ): Promise<IPagination<ICharacter>> {
    try {
      const response = await this.httpClient.get<IPagination<ICharacter>>(
        `/character`,
        params
      );

      return response.data;
    } catch (error) {
      const parsedError = error as any;

      let errorMessage = parsedError?.response?.data?.message;

      if (!errorMessage) {
        errorMessage = "An error occurred while trying to list characters";
      }

      throw new APIError(errorMessage);
    }
  }
}
