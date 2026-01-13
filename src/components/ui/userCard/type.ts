import type { User } from "../../../utils/types";

export type TUserCardUIProps = {
  user: User;
  isLiked: boolean;
  onLikeToggle: () => void;
  onOpenDetails: () => void;
};
