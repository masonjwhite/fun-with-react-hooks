import React, { useRef } from 'react';

const ColorPicker = () => {
  const selectElement = useRef(null);

  const onChange = () => {
    /* 
      - 'current' points to the mounted select element
      - Remember: This is NOT intended to replace synthetic events
      - Use cases: 
        - Managing focus, text selection, or media playback.
        - Triggering imperative animations.
        - Integrating with third-party DOM libraries.
    */
    console.log(`ELEMENT CURRENT VALUE: ${selectElement.current.value}`);
  };

  return (
    <div>
      <select ref={selectElement} onChange={onChange}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
        <option>Orange</option>
        <option>Purple</option>
      </select>
    </div>
  )
}

export default ColorPicker;