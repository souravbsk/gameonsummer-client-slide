import React, { createContext, useState } from "react";

export const themeMoodContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMood, setDarkMood] = useState(false);
  const themeValue = {
    isDarkMood,
    setDarkMood,
  };

  return (
    <themeMoodContext.Provider value={themeValue}>
      {children}
    </themeMoodContext.Provider>
  );
};

export default ThemeProvider;
