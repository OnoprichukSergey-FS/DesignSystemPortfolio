import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "design-system-theme";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const saved = await AsyncStorage.getItem(THEME_KEY);
        if (saved === "dark") {
          setIsDark(true);
        } else if (saved === "light") {
          setIsDark(false);
        }
      } catch (e) {
        console.log("Failed to load theme", e);
      } finally {
        setLoaded(true);
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    try {
      const next = !isDark;
      setIsDark(next);
      await AsyncStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch (e) {
      console.log("Failed to save theme", e);
    }
  };

  return { isDark, toggleTheme, loaded };
}
