import { type ICardBadgeVariant } from "@/components/CardBadge";

import { type ICharacterGender } from "@/models/Character";

export function getBadgeVariantByGender(
  gender: ICharacterGender
): ICardBadgeVariant {
  const badgeVariantsByGender: Record<ICharacterGender, ICardBadgeVariant> = {
    Female: "pink",
    Male: "blue",
    Genderless: "yellow",
    unknown: "grey",
  };

  return badgeVariantsByGender[gender];
}
