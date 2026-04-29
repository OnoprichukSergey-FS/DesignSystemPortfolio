import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "design-system-theme";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load saved theme when the app starts
  useEffect(() => {
    async function loadTheme() {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_KEY);

        if (savedTheme === "dark") {
          setIsDark(true);
        }

        if (savedTheme === "light") {
          setIsDark(false);
        }
      } catch (error) {
        console.log("Failed to load theme:", error);
      } finally {
        setLoaded(true);
      }
    }

    loadTheme();
  }, []);

  // Toggle between light and dark mode
  async function toggleTheme() {
    try {
      const nextTheme = !isDark;

      setIsDark(nextTheme);

      await AsyncStorage.setItem(THEME_KEY, nextTheme ? "dark" : "light");
    } catch (error) {
      console.log("Failed to save theme:", error);
    }
  }

  return {
    isDark,
    toggleTheme,
    loaded,
  };
}
