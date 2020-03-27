import React from 'react';
import useWindowDimensions from './useWindowDimensions';

const WindowDimensions = () => {
  const { windowWidth, windowHeight } = useWindowDimensions();

  return (
    <>
      <h3>Window width: {windowWidth}</h3>
      <h3>Window Height: {windowHeight}</h3>
    </>
  )
}

export default WindowDimensions;
