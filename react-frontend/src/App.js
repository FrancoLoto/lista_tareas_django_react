import { useState } from "react";
import LandingPage from "./pages/LandingPage";

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
      <LandingPage />
    </div>
  );
}

export default App;
