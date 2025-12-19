import { PersonCardExpandedUI } from "../ui/personCard/personCardExpandedUI";
import type { TPersonCardUIProps } from "../ui/personCard/type";
import { usePersonLike } from "../../hooks/usePersonLike";

type TPersonCardExpandedProps = Omit<TPersonCardUIProps, "isLiked">;

export const PersonCardExpanded = ({ person, onLikeToggle, onShareToggle, onMoreClick }: TPersonCardExpandedProps) => {
  const { isLiked, toggleLike } = usePersonLike(person.id, onLikeToggle);

  return (
    <PersonCardExpandedUI person={person} isLiked={isLiked} onLikeToggle={toggleLike} onShareToggle={onShareToggle} onMoreClick={onMoreClick} />
  );
};
