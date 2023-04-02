import { useQuery } from "react-query";

import { CharactersService } from "@/services/CharactersService";

import { ICharacter } from "@/models/Character";

interface UseCharacterDetailsData {
  character?: ICharacter;
  isLoading: boolean;
  isError: boolean;
}

interface UseCharacterDetailsProps {
  characterId: number;
}

export const useCharacterDetails = ({
  characterId,
}: UseCharacterDetailsProps): UseCharacterDetailsData => {
  const { data, isLoading, isError } = useQuery(
    ["character", characterId],
    () => CharactersService.getOne({ id: characterId })
  );

  return {
    character: data,
    isLoading,
    isError,
  };
};
