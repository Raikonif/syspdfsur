import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") != null ? localStorage.getItem("theme") : "dark",
  );
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const docElement = document.documentElement;

  const onWindowMatch = () => {
    localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)
      ? docElement.classList.add("dark")
      : docElement.classList.remove("dark");
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        docElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        docElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      // default:
      //   docElement.classList.add("dark");
      //   localStorage.setItem("theme", "dark");
      //   break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    "theme" in localStorage && e.matches
      ? docElement.classList.add("dark")
      : docElement.classList.remove("dark");
  });

  return {
    theme,
    setTheme,
  };
}

export default useDarkMode;
