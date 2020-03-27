import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Button = (props) => {
  const { children } = props;

  // Consume our context with the useContext hook!
  const { primaryColor, secondaryColor, fontSize } = useContext(ThemeContext);

  return (
    <button style={{ backgroundColor: primaryColor, color: secondaryColor, fontSize }}>
      {children}
    </button>
  )
}

export default Button;