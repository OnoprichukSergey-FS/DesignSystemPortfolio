import React from "react";
import { Platform, Pressable, Text, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../design-system/tokens";
import { useTheme } from "../theme/useTheme";

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ label, onPress, variant = "primary" }: ButtonProps) {
  // 🔥 Get theme
  const { isDark } = useTheme();
  const theme = isDark ? colors.dark : colors.light;

  // 🔥 Dynamic styles based on variant
  const getBackground = () => {
    if (variant === "primary") return theme.primary;
    if (variant === "secondary") return isDark ? "#1F2937" : "#E5E7EB";
    return "transparent"; // ghost
  };

  const getTextColor = () => {
    if (variant === "primary") return "#FFFFFF";
    if (variant === "secondary") return theme.text;
    return theme.primary; // ghost
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
        },

        variant === "ghost" && styles.ghost,
        Platform.OS === "ios" && styles.ios,
        Platform.OS === "android" && styles.android,

        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.label, { color: getTextColor() }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    borderWidth: 1,
  },

  ghost: {
    backgroundColor: "transparent",
  },

  ios: {
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  android: {
    elevation: 3,
  },

  pressed: {
    opacity: 0.7,
  },

  label: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
