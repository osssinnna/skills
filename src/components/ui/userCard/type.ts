import type { User } from "../../../utils/types";

export type TUserCardUIProps = {
  person: User;
  isLiked: boolean;
  onLikeToggle: () => void;
};
