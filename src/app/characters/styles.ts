import styled from "styled-components";

import PrimitiveSearchField from "@/components/SearchField";

export const CharacterListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
  padding-bottom: 50px;
`;

export const FiltersButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 38px;
  background: ${({ theme }) => theme.colors.main.color};
  padding: 11px 16px;
  border-radius: 4px;
  font-weight: 600;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.main.shaders[100]};
  }
`;

export const SearchField = styled(PrimitiveSearchField)`
  width: 100%;
  max-width: 300px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;

    ${FiltersButton} {
      width: 100%;
    }

    ${SearchField} {
      max-width: 100%;
    }
  }
`;
