import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("dark")

  function toggleDarkMode() {
    if (darkMode === "dark") {
      setDarkMode("light");
    } else {
      setDarkMode("dark");
    }
  }

  return (
    <div className={`${darkMode  === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
      <div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white">
        <h1>React App</h1>
        <button onClick={toggleDarkMode}>
          <span>Dark Mode</span>
        </button>
      </div>
    </div>
  );
}

export default App;
