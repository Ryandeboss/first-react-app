import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Card3() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="card">
      <h3>Theme Context</h3>
      <p>The current theme is: <strong>{isDarkMode ? 'light' : 'dark'}</strong></p>
    </div>
  );
}

export default Card3;
