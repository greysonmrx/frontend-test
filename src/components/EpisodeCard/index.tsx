import React from "react";
import Link from "next/link";

import { IEpisode } from "@/models/Episode";

import Icon from "../Icon";

import * as S from "./styles";

interface EpisodeCardProps extends Pick<IEpisode, "id" | "name" | "episode"> {}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ id, name, episode }) => {
  return (
    <S.Container>
      <S.Header>
        <S.IconContainer>
          <Icon name="episode-fill" size={24} />
        </S.IconContainer>
        <h2>{name}</h2>
        <h4>EP: {episode}</h4>
      </S.Header>
      <S.Footer>
        <Link href={`/episode/details/${id}`}>View details</Link>
      </S.Footer>
    </S.Container>
  );
};

export default EpisodeCard;
