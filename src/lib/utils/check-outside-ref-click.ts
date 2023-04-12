import { useEffect } from 'react';

export default function CheckOutsideRefClick(ref: any, action: () => void, isOpen: boolean) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target) && isOpen) {
        action();
      }
    }
    // Bind the event listener
    setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 500);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, action, isOpen]);
}
