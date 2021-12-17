import React, { useState } from "react";
import NavBar from "./components/NavBar";

import "./App.css";
import VideoView from "./components/VideoView";

function App() {
  const [darkMode, setDarkMode] = useState<Boolean>(false);

  function changeToDarkMode(mode: Boolean) {
    setDarkMode(mode);
  }

  return (
    <div
      className={`${
        darkMode ? "dark-mode-background page-container" : "page-container"
      }`}
    >
      <NavBar darkMode={darkMode} changeToDarkMode={changeToDarkMode} />
      <VideoView darkMode={darkMode} />
    </div>
  );
}

export default App;
