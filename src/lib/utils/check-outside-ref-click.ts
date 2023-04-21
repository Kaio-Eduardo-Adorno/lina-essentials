import { useCallback, useEffect } from 'react';

export default function CheckOutsideRefClick(ref: any, action: () => void, isOpen: boolean) {
  const callback = useCallback(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target) && isOpen) {
        action();
      }
    };
    setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 200);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, action, isOpen]);

  useEffect(callback, [callback]);
}
