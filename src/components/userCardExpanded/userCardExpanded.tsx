import { useState, useEffect, useCallback } from "react";
import { UserCardExpandedUI } from "../ui/userCardExpanded/userCardExpandedUI";
import type { TUserCardExpandedUIProps } from "../ui/userCardExpanded/types";

type TUserCardExpandedProps = Omit<TUserCardExpandedUIProps, "isLiked">;

export const UserCardExpanded = ({ user, onLikeToggle }: TUserCardExpandedProps) => {
  const [isButtonLiked, setIsButtonLiked] = useState(false);

  useEffect(() => setIsButtonLiked(false), [user.id]);

  const handleLikeToggle = useCallback(() => {
    setIsButtonLiked(prev => !prev);
    onLikeToggle?.();
  }, [onLikeToggle]);

  return (
    <UserCardExpandedUI
      user={user}
      isLiked={isButtonLiked}
      onLikeToggle={handleLikeToggle}
    />
  );
};
