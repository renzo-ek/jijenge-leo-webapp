import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Client-side only
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return [theme, toggleTheme];
};

export default useTheme;