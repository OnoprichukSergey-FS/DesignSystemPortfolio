import React from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import { colors, radius, spacing } from "../design-system/tokens";

// Props for reusable input component
type InputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  dark?: boolean;
};

export default function Input({
  label,
  value,
  onChangeText,
  error,
  dark,
}: InputProps) {
  // Determine if error state should be shown
  const isError = Boolean(error);

  return (
    <View style={styles.container}>
      {/* ===== LABEL ===== */}
      <Text style={[styles.label, { color: dark ? "#E5E7EB" : "#374151" }]}>
        {label}
      </Text>

      {/* ===== INPUT FIELD ===== */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter value"
        placeholderTextColor={dark ? "#9CA3AF" : "#9CA3AF"}
        style={[
          styles.input,
          {
            backgroundColor: dark ? "#111827" : "#FFFFFF",
            color: dark ? "#FFFFFF" : "#111827",
            borderColor: isError ? "#EF4444" : dark ? "#374151" : "#E5E7EB",
          },
        ]}
      />

      {/* ===== ERROR MESSAGE ===== */}
      {isError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  // Container spacing
  container: {
    width: "100%",
    marginTop: spacing.md,
  },

  // Label text
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
  },

  // Input field styling
  input: {
    height: 46,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    fontSize: 15,

    // Slight depth for web/native
    ...Platform.select({
      web: {
        boxShadow: "0px 4px 10px rgba(0,0,0,0.04)",
      },
    }),
  },

  // Error message text
  errorText: {
    color: "#EF4444",
    marginTop: 6,
    fontSize: 12,
    fontWeight: "500",
  },
});
