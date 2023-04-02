import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    padding: 10px;
    width: 100%;
    max-width: 300px;
    background-color: ${({ theme }) => theme.colors.grey.tints[100]};
    color: ${({ theme }) => theme.colors.main.shaders[900]};
    font-weight: 600;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    line-height: 20px;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.grey.tints[200]};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
