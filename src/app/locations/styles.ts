import styled from "styled-components";

import PrimitiveSearchField from "@/components/SearchField";

export const LocationListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
  padding-bottom: 50px;
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

    ${SearchField} {
      max-width: 100%;
    }
  }
`;
