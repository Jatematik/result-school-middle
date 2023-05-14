import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const useHover = <T extends HTMLElement = HTMLElement>(): {
  ref: MutableRefObject<T>;
  hovered: boolean;
} => {
  const ref: any = useRef<T>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

  useEffect(() => {
    if (ref) {
      ref.current.addEventListener('mouseover', handleMouseOver);
      ref.current.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      ref.current.removeEventListener('mouseover', handleMouseOver);
      ref.current.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref]);

  return {
    ref,
    hovered,
  };
};
