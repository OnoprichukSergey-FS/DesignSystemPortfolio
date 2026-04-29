import { View, Text, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../design-system/tokens";

// Props for flexible tag usage
interface TagProps {
  label: string;
  variant?: "default" | "primary" | "outline";
}

// Reusable Tag / Badge component
export default function Tag({ label, variant = "default" }: TagProps) {
  return (
    <View style={[styles.tag, styles[variant]]}>
      <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.md,
    alignSelf: "flex-start",
  },

  // ===== VARIANTS =====
  default: {
    backgroundColor: "#E5E7EB",
  },

  primary: {
    backgroundColor: "rgba(106,90,205,0.12)",
  },

  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
  },

  // ===== TEXT =====
  text: {
    fontSize: 12,
    fontWeight: "700",
  },

  defaultText: {
    color: "#374151",
  },

  primaryText: {
    color: colors.primary,
  },

  outlineText: {
    color: colors.primary,
  },
});
