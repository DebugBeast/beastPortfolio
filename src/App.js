import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");
  const [showChatbotIcon, setShowChatbotIcon] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [clickCount, setClickCount] = useState(0);

  // Load the Botpress webchat and bot script
  useEffect(() => {
    // Create and append Botpress Webchat script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Create and append the bot-specific script
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/03/21/04/20250321042005-5ALRZQNQ.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Wait for the bot script to load and initialize the chatbot
    script2.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          host: "https://cdn.botpress.cloud", // Ensure this matches your Botpress Cloud URL
          botId: "20250321042005-5ALRZQNQ",  // Replace with your Bot ID
        });
      }
    };

    return () => {
      // Clean up the script elements on component unmount
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  // Set chatbot icon to appear after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatbotIcon(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleChatbotIconClick = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.open(); // Open the chat widget when the icon is clicked
    }
  };

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
        {/* Conditionally render the chatbot icon */}
        {showChatbotIcon && (
          <div className="chatbot-icon" onClick={handleChatbotIconClick}>
            {/* Botpress already provides its own icon */}
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
