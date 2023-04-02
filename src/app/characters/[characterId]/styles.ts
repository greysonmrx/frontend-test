import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const CharacterImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 300px;

  img {
    border-radius: 4px;
  }
`;

export const CharacterDetailsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex: 1;

  div {
    width: 100%;
    max-width: 100px;

    h3 {
      color: ${({ theme }) => theme.colors.main.shaders[900]};
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 5px;
    }

    p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.grey.tints[900]};
      font-size: 14px;
    }
  }
`;
