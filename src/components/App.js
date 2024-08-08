import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  function handleToggleTheme() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  // Determine the class name based on dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleTheme}>
          {isDarkMode ? 'Dark' : 'Light'} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
