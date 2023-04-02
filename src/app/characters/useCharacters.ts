import React from "react";
import { useInfiniteQuery } from "react-query";

import {
  ICharacter,
  ICharacterGender,
  ICharacterStatus,
} from "@/models/Character";

import { useDebounce } from "@/hooks/useDebounce";
import { useFavoritedCharacters } from "@/hooks/useFavoritedCharacters";

import { CharactersService } from "@/services/CharactersService";

import { IPagination } from "@/interfaces/IPagination";

interface UseCharactersData {
  isError: boolean;
  isLoading: boolean;
  hasNextPage: boolean;
  characters: ICharacter[];
  handleChangeName: (text: string) => void;
  handleLoadMoreResults: () => void;
  checkIsFavoritedCharacter: (characterId: ICharacter["id"]) => boolean;
  handleFavoriteCharacter: (characterId: ICharacter["id"]) => void;
  handleUnfavoriteCharacter: (characterId: ICharacter["id"]) => void;
}

export const useCharacters = (): UseCharactersData => {
  const [name, setName] = React.useState<string>();
  const [gender, setGender] = React.useState<ICharacterGender>();
  const [status, setStatus] = React.useState<ICharacterStatus>();

  const debouncedName = useDebounce(name, 1000);
  const {
    favoritedCharacters,
    handleFavoriteCharacter,
    handleUnfavoriteCharacter,
  } = useFavoritedCharacters();
  const {
    data,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage: handleLoadMoreResults,
  } = useInfiniteQuery({
    queryKey: ["characters", debouncedName],
    queryFn: ({ pageParam = 1 }) =>
      CharactersService.getAll({
        name: debouncedName,
        gender,
        status,
        page: pageParam,
      }),
    getNextPageParam: (lastPage: IPagination<ICharacter>, allPages) => {
      if (lastPage.info.next) {
        return allPages.length + 1;
      }

      return undefined;
    },
  });

  const checkIsFavoritedCharacter = (
    characterId: ICharacter["id"]
  ): boolean => {
    return !!favoritedCharacters.find(
      (favoritedCharacter) => favoritedCharacter === characterId
    );
  };

  return {
    characters: data?.pages.flatMap((page) => page.results) || [],
    isError,
    isLoading,
    hasNextPage: !!hasNextPage,
    handleChangeName: setName,
    handleLoadMoreResults,
    handleFavoriteCharacter,
    handleUnfavoriteCharacter,
    checkIsFavoritedCharacter,
  };
};
