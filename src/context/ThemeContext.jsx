import { createContext, useState } from "react";

// Create Context
export const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle theme
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
