import styled from "styled-components";
import NextImage from "next/image";

import { hexToRgb } from "@/utils/hexToRgb";

export const Container = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.grey.tints[300]};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.grey.tints[500]};
    box-shadow: 0px 5px 5px
      ${({ theme }) => hexToRgb(theme.colors.grey.shaders[900], 0.1)};
  }
`;

export const Header = styled.header`
  position: relative;
  aspect-ratio: 1 / 1;
`;

export const CharacterImage = styled(NextImage)`
  border-radius: 4px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0;
`;

export const BadgesContainer = styled.div`
  display: flex;
  gap: 5px;
  padding-bottom: 8px;
`;

export const CharacterName = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  color: ${({ theme }) => theme.colors.main.shaders[900]};
`;

export const Footer = styled.footer``;

export const LikeButton = styled.button`
  width: 100%;
  border: none;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey.tints[300]};
`;
