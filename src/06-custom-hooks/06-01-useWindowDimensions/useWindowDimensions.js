import { useState, useEffect } from 'react';

// Custom hooks are just functions that allow us to reuse functionality across components!
const useWindowDimensions = () => {
  // State variables
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Use effect called once on mount to set up the event listener
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    });

    // Clean up function
    return () => {
      window.removeEventListener('resize');
    }

    // Dependency array is blank since we only need to call it once (on mount)
  }, [])

  return { windowWidth, windowHeight };
};

export default useWindowDimensions;