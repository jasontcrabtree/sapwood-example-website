import { useState, useEffect } from 'react';

function useDetectOutsideClick(element, initialState) {
  const [isStateActive, setIsStateActive] = useState(initialState);

  useEffect(() => {
    function pageClickEvent(e) {
      // If the active element exists and is clicked outside of change state
      if (element.current !== null && !element.current.contains(e.target)) {
        setIsStateActive(!isStateActive);
      }
    }

    // If the item is active (ie open) then listen for clicks
    if (isStateActive) {
      window.addEventListener('click', pageClickEvent);
    }
    // anonymous function to removeEventLisener
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isStateActive, element]);

  return [isStateActive, setIsStateActive];
}

export default useDetectOutsideClick;
