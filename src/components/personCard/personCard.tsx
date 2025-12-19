import { PersonCardUI } from "../ui/personCard/personCardUI";
import type { TPersonCardUIProps } from "../ui/personCard/type";
import { usePersonLike } from "../../hooks/usePersonLike";

type TPersonCardProps = Omit<TPersonCardUIProps, "isLiked">;

export const PersonCard = ({ person, onLikeToggle, onShareToggle, onMoreClick }: TPersonCardProps) => {
  const { isLiked, toggleLike } = usePersonLike(person.id, onLikeToggle);

  return (
    <PersonCardUI person={person} isLiked={isLiked} onLikeToggle={toggleLike} onShareToggle={onShareToggle} onMoreClick={onMoreClick}  />
  );
};
