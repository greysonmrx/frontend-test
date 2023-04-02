import styled from "styled-components";

import { favoriteButtonVariants } from "./variants";

interface ContainerProps {
  isFavorited: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  border: none;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey.tints[300]};

  ${({ isFavorited }) =>
    isFavorited
      ? favoriteButtonVariants.isFavorite
      : favoriteButtonVariants.isNotFavorite};
`;
