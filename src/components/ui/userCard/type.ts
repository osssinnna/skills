import type { User } from "../../../utils/types";

export type TUserCardUIProps = {
  user: User;
  isLiked: boolean;
  hasExchange: boolean;
  onLikeToggle: () => void;
  onOpenDetails: () => void;
};
