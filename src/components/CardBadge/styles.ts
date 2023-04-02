import styled from "styled-components";

import { cardBadgeVariants } from "./variants";

import { type ICardBadgeVariant } from ".";

interface ContainerProps {
  variant: ICardBadgeVariant;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 4px;
  background: red;
  height: 18px;
  padding: 1px 4px;
  border-radius: 4px;

  span {
    font-size: 12px;
    text-transform: capitalize;
  }

  ${({ variant }) => cardBadgeVariants[variant]}
`;
