import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");

  // eslint-disable-next-line no-unused-vars
  const [clickCount, setClickCount] = useState(0);

  // Set theme in localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const getRandomTheme = () => {
    const themeKeys = Object.keys(themes);
    return themeKeys[Math.floor(Math.random() * themeKeys.length)];
  };

  const handleDocumentClick = useCallback(() => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= 5) {
        setTheme(getRandomTheme());
        return 0;
      }
      return newCount;
    });
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <div>
        <Main theme={themes[theme]} />
      </div>
    </ThemeProvider>
  );
}

export default App;
