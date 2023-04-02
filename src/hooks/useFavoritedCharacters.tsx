import React from "react";

import { ICharacter } from "@/models/Character";

interface FavoritedCharactersContextData {
  favoritedCharacters: ICharacter["id"][];
  handleFavoriteCharacter: (characterId: ICharacter["id"]) => void;
  handleUnfavoriteCharacter: (characterId: ICharacter["id"]) => void;
}

const FavoritedCharactersContext =
  React.createContext<FavoritedCharactersContextData>(
    {} as FavoritedCharactersContextData
  );

const FavoritedCharactersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favoritedCharacters, setFavoritedCharacters] = React.useState<
    ICharacter["id"][]
  >([]);

  const handleFavoriteCharacter = React.useCallback(
    (characterId: ICharacter["id"]) => {
      setFavoritedCharacters((prevState) => [...prevState, characterId]);
    },
    []
  );

  const handleUnfavoriteCharacter = React.useCallback(
    (characterId: ICharacter["id"]) => {
      setFavoritedCharacters((prevState) =>
        prevState.filter(
          (favoritedCharacter) => favoritedCharacter !== characterId
        )
      );
    },
    []
  );

  return (
    <FavoritedCharactersContext.Provider
      value={{
        favoritedCharacters,
        handleFavoriteCharacter,
        handleUnfavoriteCharacter,
      }}
    >
      {children}
    </FavoritedCharactersContext.Provider>
  );
};

function useFavoritedCharacters(): FavoritedCharactersContextData {
  const context = React.useContext(FavoritedCharactersContext);

  if (!context)
    throw new Error(
      "useFavoritedCharacters should be used within FavoritedCharactersProvider"
    );

  return context;
}

export { FavoritedCharactersProvider, useFavoritedCharacters };
