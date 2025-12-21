import { UserCardExpandedUI } from "../ui/userCardExpanded/userCardExpandedUI";
import type { TUserCardUIProps } from "../ui/userCard/type";
import { usePersonLike } from "../../hooks/usePersonLike";

type TPersonCardExpandedProps = Omit<TUserCardUIProps, "isLiked">;

export const PersonCardExpanded = ({ person, onLikeToggle, onShareToggle, onMoreClick }: TPersonCardExpandedProps) => {
  const { isLiked, toggleLike } = usePersonLike(person.id, onLikeToggle);

  return (
    <UserCardExpandedUI person={person} isLiked={isLiked} onLikeToggle={toggleLike} onShareToggle={onShareToggle} onMoreClick={onMoreClick} />
  );
};
