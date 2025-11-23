import React from "react";
import { View, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../design-system/tokens";

type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.lg,
    borderRadius: radius.lg,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginVertical: spacing.md,
  },
});
