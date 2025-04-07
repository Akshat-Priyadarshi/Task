import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const DarkModeToggle = ({ toggleDarkMode, setToggleDarkMode }) => {
  const toggleDarkModeHandler = () => {
    setToggleDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Toggle the dark class on the html element
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // Save the preference in localStorage
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  /*
useEffect(() => {
  // Check localStorage for dark mode preference
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  setToggleDarkMode(isDarkMode);
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  }
}, []);

const toggleDarkModeHandler = () => {
  setToggleDarkMode((prevMode) => {
    const newMode = !prevMode;
    // Toggle the dark class on the html element
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save the preference in localStorage
    localStorage.setItem("darkMode", newMode);
    return newMode;
  });
};
*/
  return (
    <Button onClick={toggleDarkModeHandler} variant="outlined" className="mb-4">
      {toggleDarkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default DarkModeToggle;
