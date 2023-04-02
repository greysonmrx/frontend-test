import {
  css,
  type DefaultTheme,
  type FlattenInterpolation,
  type ThemeProps,
} from "styled-components";

import { hexToRgb } from "@/utils/hexToRgb";

type IFavoriteButtonVariant = "isFavorite" | "isNotFavorite";

type FavoriteButtonVariants = Record<
  IFavoriteButtonVariant,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
>;

export const favoriteButtonVariants: FavoriteButtonVariants = {
  isFavorite: css`
    background-color: ${({ theme }) => hexToRgb(theme.colors.red, 0.15)};
    color: ${({ theme }) => theme.colors.red};

    &:hover {
      background-color: ${({ theme }) => hexToRgb(theme.colors.red, 0.25)};
    }
  `,
  isNotFavorite: css`
    background-color: ${({ theme }) => theme.colors.grey.tints[100]};
    color: ${({ theme }) => theme.colors.grey.tints[700]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey.tints[200]};
    }
  `,
};
