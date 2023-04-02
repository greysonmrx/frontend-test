import { ILocation } from "./Location";

export type ICharacterStatus = "Alive" | "Dead" | "unknown";

export type ICharacterGender = "Male" | "Female" | "Genderless" | "unknown";

export interface ICharacter {
  id: number;
  name: string;
  status: ICharacterStatus;
  species: string;
  type: string;
  gender: ICharacterGender;
  origin: Pick<ILocation, "name" | "url">;
  location: Pick<ILocation, "name" | "url">;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
