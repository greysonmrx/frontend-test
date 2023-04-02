import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey.tints[300]};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 5px;

  h2 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.main.shaders[900]};
    font-size: 18px;
  }

  h4 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey.tints[900]};
    font-size: 14px;
  }
`;

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main.tints[100]};
  margin-bottom: 5px;

  svg {
    color: ${({ theme }) => theme.colors.main.color};
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  a {
    width: 100%;
    padding: 8px;
    font-size: 15px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.main.color};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.main.shaders[100]};
    }
  }
`;
