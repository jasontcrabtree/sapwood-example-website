import { useState, useEffect } from 'react';
/* Source: https://usehooks.com/useMedia/ */
/* https://www.reddit.com/r/reactjs/comments/arggf9/prevent_onmouseenter_event_from_firing_on_mobile/ */
/* https://gist.github.com/gragland/ed8cac563f5df71d78f4a1fefa8c5633/c769cdc6a658b3925e9e2e204d228400d132965f */

// Hook
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      // Update the state with the current value
      setMatches(mediaQuery.matches);
      // Create an event listener
      const handler = (event) => setMatches(event.matches);
      // Attach the event listener to know when the matches value changes
      mediaQuery.addEventListener('change', handler);
      // Remove the event listener on cleanup
      return () => mediaQuery.removeEventListener('change', handler);
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
}

export default useMediaQuery;

