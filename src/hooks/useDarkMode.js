import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = initial => {
  const [isDark, setIsDark] = useLocalStorage('darkMode', initial);

  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];
    if (isDark) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDark]);

  return [isDark, setIsDark];
}