import { useEffect, useState } from 'react';

export const useModel = () => {
  const themeColor = localStorage.getItem('gzhel-devfinder:theme-color');
  const isDarkDefault = themeColor === 'dark';
  const [isDark, setDark] = useState(isDarkDefault);
  const themeText = isDark ? 'Light' : 'Dark';

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('gzhel-devfinder:theme-color', isDark ? 'dark' : 'light');
  }, [isDark]);

  return { setDark, themeText, isDark };
};
