"use client";

import React from "react";

import EpisodeCard from "@/components/EpisodeCard";
import LoadMoreButton from "@/components/LoadMoreButton";

import { useEpisodes } from "./useEpisodes";

import * as S from "./styles";

const EpisodeList: React.FC = () => {
  const { episodes, hasNextPage, handleChangeName, handleLoadMoreResults } =
    useEpisodes();

  return (
    <>
      <header>
        <h1>Episodes</h1>
        <h3>List of all Rick and Morty episodes</h3>
      </header>
      <S.FiltersContainer>
        <S.SearchField
          name="locationName"
          placeholder="Seach by name"
          onChange={(event) => handleChangeName(event.target.value)}
        />
      </S.FiltersContainer>
      <S.EpisodeListContainer>
        <React.Suspense fallback={<h1>Opa</h1>}>
          {episodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              id={episode.id}
              name={episode.name}
              episode={episode.episode}
            />
          ))}
        </React.Suspense>
      </S.EpisodeListContainer>
      <LoadMoreButton hasNextPage={hasNextPage} onClick={handleLoadMoreResults}>
        Load more episodes
      </LoadMoreButton>
    </>
  );
};

export default EpisodeList;
