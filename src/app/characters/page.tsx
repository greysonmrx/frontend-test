"use client";

import React from "react";

import Icon from "@/components/Icon";
import CharacterCard from "@/components/CharacterCard";
import LoadMoreButton from "@/components/LoadMoreButton";

import { useCharacters } from "./useCharacters";

import * as S from "./styles";

const CharacterList: React.FC = () => {
  const {
    characters,
    hasNextPage,
    handleChangeName,
    handleLoadMoreResults,
    handleFavoriteCharacter,
    checkIsFavoritedCharacter,
    handleUnfavoriteCharacter,
  } = useCharacters();

  return (
    <>
      <header>
        <h1>Characters</h1>
        <h3>List of all Rick and Morty characters</h3>
      </header>
      <S.FiltersContainer>
        <S.SearchField
          name="characterName"
          placeholder="Seach by name"
          onChange={(event) => handleChangeName(event.target.value)}
        />
        <S.FiltersButton>
          <Icon name="filter-outline" size={18} />
          Filtros
        </S.FiltersButton>
      </S.FiltersContainer>
      <S.CharacterListContainer>
        <React.Suspense fallback={<h1>Opa</h1>}>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              gender={character.gender}
              status={character.status}
              isFavorited={checkIsFavoritedCharacter(character.id)}
              onFavoriteCharacter={handleFavoriteCharacter}
              onUnfavoriteCharacter={handleUnfavoriteCharacter}
            />
          ))}
        </React.Suspense>
      </S.CharacterListContainer>
      <LoadMoreButton hasNextPage={hasNextPage} onClick={handleLoadMoreResults}>
        Load more characters
      </LoadMoreButton>
    </>
  );
};

export default CharacterList;
