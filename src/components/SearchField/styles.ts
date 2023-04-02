import styled from "styled-components";

type InputContainerProps = {
  hasError: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;

  input {
    width: 100%;
    font-size: 16px;
    padding: 11px 16px 11px 42px;
    background: transparent;
    transition: all 0.3s ease;
    height: 38px;
    border: 1px solid
      ${({ theme, hasError }) =>
        hasError ? theme.colors.red : theme.colors.grey.tints[300]};
    border-radius: 4px;

    &:focus,
    &:focus-visible,
    &:focus-within {
      border-color: ${({ theme }) => theme.colors.main.color};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.main.color};
    }

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.main.tints[600]};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.grey.tints[100]};
      border-color: ${({ theme }) => theme.colors.grey.tints[400]};
    }
  }

  svg {
    position: absolute;
    left: 12px;
    top: 10px;
  }
`;

export const ErrorMessage = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
`;
