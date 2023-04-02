import { type IconName } from "@/components/Icon";

import { type ICharacterStatus } from "@/models/Character";

export function getIconNameByStatus(status: ICharacterStatus): IconName {
  const iconsByStatus: Record<ICharacterStatus, IconName> = {
    Alive: "alive-outline",
    Dead: "dead-outline",
    unknown: "unknown-outline",
  };

  return iconsByStatus[status];
}
