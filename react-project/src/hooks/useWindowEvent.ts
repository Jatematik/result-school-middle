import { useEffect } from 'react';

export function useWindowEvent(
  type: keyof WindowEventMap,
  listener: (e: Event) => void,
  options?: {
    passive?: boolean;
    once?: boolean;
    capture?: boolean;
  }
) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}
