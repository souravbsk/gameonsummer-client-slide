import React, { createContext, useState } from "react";

export const ThemeMoodContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [Dark, setDark] = useState(false);
  const theme = {
    Dark, 
    setDark
  }


  return (
    <ThemeMoodContext.Provider value={theme}>
      {children}
    </ThemeMoodContext.Provider>
  );
};

export default ThemeProvider;
