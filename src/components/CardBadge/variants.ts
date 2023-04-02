import {
  css,
  type DefaultTheme,
  type FlattenInterpolation,
  type ThemeProps,
} from "styled-components";

import { hexToRgb } from "@/utils/hexToRgb";

import { type ICardBadgeVariant } from ".";

type CardBadgeVariants = Record<
  ICardBadgeVariant,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
>;

export const cardBadgeVariants: CardBadgeVariants = {
  blue: css`
    background-color: ${({ theme }) => hexToRgb(theme.colors.blue, 0.1)};
    color: ${({ theme }) => theme.colors.blue};
  `,
  pink: css`
    background-color: ${({ theme }) => hexToRgb(theme.colors.pink, 0.1)};
    color: ${({ theme }) => theme.colors.pink};
  `,
  yellow: css`
    background-color: ${({ theme }) => hexToRgb(theme.colors.yellow, 0.1)};
    color: ${({ theme }) => theme.colors.yellow};
  `,
  grey: css`
    background-color: ${({ theme }) => hexToRgb(theme.colors.grey.color, 0.1)};
    color: ${({ theme }) => theme.colors.grey.color};
  `,
  green: css`
    background-color: ${({ theme }) => hexToRgb(theme.colors.green, 0.1)};
    color: ${({ theme }) => theme.colors.green};
  `,
  red: css`
    background-color: ${({ theme }) => hexToRgb(theme.colors.red, 0.1)};
    color: ${({ theme }) => theme.colors.red};
  `,
};
