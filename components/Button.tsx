import React from "react";
import { Platform, Pressable, Text, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../design-system/tokens";

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ label, onPress, variant = "primary" }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        Platform.OS === "ios" && styles.ios,
        Platform.OS === "android" && styles.android,
        pressed && styles.pressed,
      ]}
    >
      <Text
        style={[
          styles.label,
          variant === "ghost" && { color: colors.text },
          variant === "secondary" && { color: colors.primary },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    marginBottom: spacing.md,
  },

  primary: {
    backgroundColor: colors.primary,
  },

  secondary: {
    backgroundColor: "#E7E7FF",
  },

  ghost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
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
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
