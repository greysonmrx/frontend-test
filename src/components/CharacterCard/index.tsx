"use client";

import React from "react";

import { ICharacter } from "@/models/Character";

import { getIconNameByGender } from "@/helpers/getIconNameByGender";
import { getIconNameByStatus } from "@/helpers/getIconNameByStatus";
import { getBadgeVariantByStatus } from "@/helpers/getBadgeVariantByStatus";
import { getBadgeVariantByGender } from "@/helpers/getBadgeVariantByGender";

import Icon from "../Icon";
import CardBadge from "../CardBadge";
import FavoriteButton from "../FavoriteButton";

import * as S from "./styles";

interface CharacterCardProps
  extends Pick<ICharacter, "id" | "name" | "image" | "status" | "gender"> {
  isFavorited: boolean;
  onFavoriteCharacter: (characterId: ICharacter["id"]) => void;
  onUnfavoriteCharacter: (characterId: ICharacter["id"]) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  image,
  gender,
  status,
  isFavorited,
  onFavoriteCharacter,
  onUnfavoriteCharacter,
}) => {
  const favoriteOrUnfavoriteFuntion = React.useCallback(() => {
    if (isFavorited) {
      return onUnfavoriteCharacter(id);
    }

    return onFavoriteCharacter(id);
  }, [id, isFavorited, onFavoriteCharacter, onUnfavoriteCharacter]);

  return (
    <S.Container>
      <S.Header>
        <S.CharacterImage fill alt={name} src={image} />
      </S.Header>
      <S.Main>
        <S.BadgesContainer>
          <CardBadge variant={getBadgeVariantByStatus(status)}>
            <Icon name={getIconNameByStatus(status)} size={12} />
            <span>{status}</span>
          </CardBadge>
          <CardBadge variant={getBadgeVariantByGender(gender)}>
            <Icon name={getIconNameByGender(gender)} size={12} />
            <span>{gender}</span>
          </CardBadge>
        </S.BadgesContainer>
        <S.CharacterName>{name}</S.CharacterName>
      </S.Main>
      <S.Footer>
        <FavoriteButton
          isFavorited={isFavorited}
          onClick={favoriteOrUnfavoriteFuntion}
        />
      </S.Footer>
    </S.Container>
  );
};

export default CharacterCard;
