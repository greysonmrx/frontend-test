"use client";

import React from "react";

import LocationCard from "@/components/LocationCard";
import LoadMoreButton from "@/components/LoadMoreButton";

import { useLocations } from "./useLocations";

import * as S from "./styles";

const LocationList: React.FC = () => {
  const { locations, hasNextPage, handleChangeName, handleLoadMoreResults } =
    useLocations();

  return (
    <>
      <header>
        <h1>Locations</h1>
        <h3>List of all Rick and Morty locations</h3>
      </header>
      <S.FiltersContainer>
        <S.SearchField
          name="locationName"
          placeholder="Seach by name"
          onChange={(event) => handleChangeName(event.target.value)}
        />
      </S.FiltersContainer>
      <S.LocationListContainer>
        <React.Suspense fallback={<h1>Opa</h1>}>
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              id={location.id}
              name={location.name}
              residents={location.residents}
            />
          ))}
        </React.Suspense>
      </S.LocationListContainer>
      <LoadMoreButton hasNextPage={hasNextPage} onClick={handleLoadMoreResults}>
        Load more locations
      </LoadMoreButton>
    </>
  );
};

export default LocationList;
