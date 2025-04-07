/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";
import ProjectList from "./ProjectList";

function App({ toggleDarkMode, setToggleDarkMode }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));

    // check local Storage for dark mode preference
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setToggleDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, [setToggleDarkMode]);

  return (
    <Container
      className={`min-h-screen p-6 ${
        toggleDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <DarkModeToggle
        toggleDarkMode={toggleDarkMode}
        setToggleDarkMode={setToggleDarkMode}
      />
      <Typography variant="h4" gutterBottom>
        Available Projects
      </Typography>
      <ProjectList projects={projects} />
    </Container>
  );
}
/*function App({ toggleDarkMode, setToggleDarkMode }) {
  return (
    <div>
      <h1>Hello, World!</h1>
//      { Your existing code }
//    </div>
//  );
}*/

export default App;
