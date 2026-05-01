import React from "react";
import {
  Platform,
  Pressable,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { colors, radius } from "../design-system/tokens";
import { useTheme } from "../theme/useTheme";

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ label, onPress, variant = "primary" }: ButtonProps) {
  const { isDark } = useTheme();
  const { width } = useWindowDimensions();

  const isMobile = width < 600;
  const theme = isDark ? colors.dark : colors.light;

  const getBackground = () => {
    if (variant === "primary") return theme.primary;
    if (variant === "secondary") return isDark ? "#1F2937" : "#E5E7EB";
    return "transparent";
  };

  const getTextColor = () => {
    if (variant === "primary") return "#FFFFFF";
    if (variant === "secondary") return theme.text;
    return theme.primary;
  };

  const getBorder = () => {
    if (variant === "ghost") return theme.primary;
    return "transparent";
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: getBackground(),
          borderColor: getBorder(),
          paddingVertical: isMobile ? 10 : 14,
          paddingHorizontal: isMobile ? 16 : 22,
          borderRadius: isMobile ? 14 : radius.md,
        },
        variant === "ghost" && styles.ghost,
        Platform.OS === "ios" && styles.ios,
        Platform.OS === "android" && styles.android,
        pressed && styles.pressed,
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: getTextColor(),
            fontSize: isMobile ? 14 : 16,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  ghost: {
    backgroundColor: "transparent",
  },

  ios: {
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  android: {
    elevation: 3,
  },

  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },

  label: {
    textAlign: "center",
    fontWeight: "800",
  },
});
