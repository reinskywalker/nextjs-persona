import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem('darkMode', JSON.stringify(!prevMode));
      return !prevMode;
    });
  };

  return [darkMode, toggleDarkMode];
};
