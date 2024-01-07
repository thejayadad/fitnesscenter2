'use client'
import React from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi'; 
import styles from './Themebutton.module.css'; 

const Themebutton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))}
      className={`${styles.themeButton} ${currentTheme === 'dark' ? styles.darkMode : ''}`}
    >
      {currentTheme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default Themebutton;
