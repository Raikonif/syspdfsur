import React, { useEffect } from "react";

interface IProps {
  ref: React.RefObject<HTMLDivElement>;
  onOutsideClick: () => void;
}
function useOutsideClick({ ref, onOutsideClick }: IProps) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, onOutsideClick]);
}

export default useOutsideClick;
