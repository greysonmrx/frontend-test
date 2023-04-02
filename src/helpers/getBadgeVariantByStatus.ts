import { type ICardBadgeVariant } from "@/components/CardBadge";

import { type ICharacterStatus } from "@/models/Character";

export function getBadgeVariantByStatus(
  status: ICharacterStatus
): ICardBadgeVariant {
  const badgeVariantsByGender: Record<ICharacterStatus, ICardBadgeVariant> = {
    Alive: "green",
    Dead: "red",
    unknown: "grey",
  };

  return badgeVariantsByGender[status];
}
