import { type IconName } from "@/components/Icon";

import { type ICharacterGender } from "@/models/Character";

export function getIconNameByGender(gender: ICharacterGender): IconName {
  const iconsByGender: Record<ICharacterGender, IconName> = {
    Female: "female-outline",
    Male: "male-outline",
    Genderless: "genderless-outline",
    unknown: "unknown-outline",
  };

  return iconsByGender[gender];
}
