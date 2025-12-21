type TRef = React.RefObject<NodeJS.Timeout | null>;

export const clearTimeoutRef = (ref: TRef ) => {
  if(ref.current){
    clearTimeout(ref.current);
    ref.current = null;
  }
}