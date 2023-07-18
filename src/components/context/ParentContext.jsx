import React, { createContext, useContext, useState } from "react";

// Create a dynamic context
const ThemeContext = createContext();

// Create a component that consumes the context
const ChildComponent = () => {
  // Consume the context using useContext
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        height: "100vh",
      }}
    >
      This is a child component consuming the theme context.
    </div>
  );
};

// Create a parent component that provides the context
const DynamicContext = () => {
  // Define the state for the theme
  const [theme, setTheme] = useState({
    background: "lightblue",
    text: "black",
  });

  // Update the theme
  const updateTheme = () => {
    setTheme({
      background: "lightgreen",
      text: "red",
    });
  };

  return (
    <div>
      <button onClick={updateTheme}>Change Theme</button>

      {/* Provide the context value to the children */}
      <ThemeContext.Provider value={theme}>
        <ChildComponent />
      </ThemeContext.Provider>
    </div>
  );
};

export default DynamicContext;
