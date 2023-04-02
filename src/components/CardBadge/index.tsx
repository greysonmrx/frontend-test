import "./variants";

import React from "react";

import * as S from "./styles";

export type ICardBadgeVariant =
  | "red"
  | "green"
  | "grey"
  | "blue"
  | "pink"
  | "yellow";

interface CardBadgeProps extends React.PropsWithChildren {
  variant: ICardBadgeVariant;
}

const CardBadge: React.FC<CardBadgeProps> = ({ variant, children }) => {
  return <S.Container variant={variant}>{children}</S.Container>;
};

export default CardBadge;
