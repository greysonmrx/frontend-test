"use client";

import React from "react";
import Image from "next/image";

import { useCharacterDetails } from "./useCharacterDetails";

import * as S from "./styles";

interface CharacterDetailsProps {
  params: {
    characterId: number;
  };
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  params: { characterId },
}) => {
  const { character } = useCharacterDetails({ characterId });

  return (
    <S.Container>
      <React.Suspense fallback={<h1>opa</h1>}>
        {character && (
          <>
            <S.CharacterImageContainer>
              <Image fill src={character.image} alt={character.name} />
            </S.CharacterImageContainer>
            <S.CharacterDetailsContent>
              <div>
                <h3>Name</h3>
                <p>{character.name || "Unknown"}</p>
              </div>
              <div>
                <h3>Status</h3>
                <p>{character.status || "Unknown"}</p>
              </div>
              <div>
                <h3>Species</h3>
                <p>{character.species || "Unknown"}</p>
              </div>
              <div>
                <h3>Type</h3>
                <p>{character.type || "Unknown"}</p>
              </div>
              <div>
                <h3>Gender</h3>
                <p>{character.gender || "Unknown"}</p>
              </div>
              <div>
                <h3>Origin</h3>
                <p>{character.origin.name || "Unknown"}</p>
              </div>
              <div>
                <h3>Location</h3>
                <p>{character.location.name || "Unknown"}</p>
              </div>
              {/* <div>
                <h3>Number of episodes</h3>
                <p>
                  {String(character.episode.length || 0).padStart(2, "0")}{" "}
                  episodes
                </p>
              </div> */}
            </S.CharacterDetailsContent>
          </>
        )}
      </React.Suspense>
    </S.Container>
  );
};

export default CharacterDetails;
