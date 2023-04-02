import React from "react";

import Icon from "../Icon";

import * as S from "./styles";

interface FavoriteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFavorited: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorited,
  ...props
}) => {
  return (
    <S.Container isFavorited={isFavorited} {...props}>
      <Icon name="heart-fill" size={14} />
    </S.Container>
  );
};

export default FavoriteButton;
