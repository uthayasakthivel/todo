import { createContext, useEffect, useState } from "react";

// Create Context
export const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) {
  //     setDarkMode(JSON.parse(savedTheme));
  //   }
  //   console.log(darkMode);
  // }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  // Function to toggle theme
  const handleToggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", JSON.stringify(darkMode));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
