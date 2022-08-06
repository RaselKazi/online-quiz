import React, { useState, useEffect } from "react";

const InitialTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export default function useDarkMode() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    InitialTheme();
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }, []);
  return [theme, setTheme];
}
