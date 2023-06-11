import React, { createContext, useEffect, useState } from "react";

import DarkUrl from "../assets/Media/night.mp3";
import DayUrl from "../assets/Media/day.mp3";
export const ThemeMoodContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [Dark, setDark] = useState(true);
  const theme = {
    Dark,
    setDark,
  };

  return (
    <ThemeMoodContext.Provider value={theme}>
      {children}
    </ThemeMoodContext.Provider>
  );
};

export default ThemeProvider;
