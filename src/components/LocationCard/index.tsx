import React from "react";
import Link from "next/link";

import { ILocation } from "@/models/Location";

import Icon from "../Icon";

import * as S from "./styles";

interface LocationCardProps
  extends Pick<ILocation, "id" | "name" | "residents"> {}

const LocationCard: React.FC<LocationCardProps> = ({ id, name, residents }) => {
  const showNumberOfResidents = () => {
    const numberOfResidents = residents?.length ?? 0;

    return `${String(numberOfResidents).padStart(2, "0")} ${
      numberOfResidents === 1 ? "resident" : "residents"
    }`;
  };

  return (
    <S.Container>
      <S.Header>
        <S.IconContainer>
          <Icon name="location-fill" size={24} />
        </S.IconContainer>
        <h2>{name}</h2>
        <h4>{showNumberOfResidents()}</h4>
      </S.Header>
      <S.Footer>
        <Link href={`/location/details/${id}`}>View details</Link>
      </S.Footer>
    </S.Container>
  );
};

export default LocationCard;
