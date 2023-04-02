import styled, { css } from "styled-components";

type MenuItemProps = {
  isActive: boolean;
};

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey.tints[300]};

  nav {
    flex: 1;
    height: 100%;
    display: flex;
    max-width: 1200px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      height: 45px;
      width: auto;
    }

    ul {
      height: 100%;
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  }
`;

export const MenuItem = styled.li<MenuItemProps>`
  height: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0px 16px;
    border-bottom: 2px solid transparent;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey.tints[900]};

    &:hover {
      border-bottom-color: ${({ theme }) => theme.colors.main.color};
      color: ${({ theme }) => theme.colors.main.shaders[900]};
    }

    ${({ isActive, theme }) =>
      isActive &&
      css`
        border-bottom-color: ${theme.colors.main.color};
        color: ${theme.colors.main.shaders[900]};
      `}
  }
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollArea = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  > header {
    margin-bottom: 40px;

    h1 {
      font-size: 32px;
      color: ${({ theme }) => theme.colors.main.shaders[900]};
      font-weight: 700;
      margin-bottom: 10px;
    }

    h3 {
      color: ${({ theme }) => theme.colors.grey.tints[900]};
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
