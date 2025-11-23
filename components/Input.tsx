import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

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
  const isError = Boolean(error);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, dark && { color: "#fff" }]}>{label}</Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter value"
        placeholderTextColor={dark ? "#aaa" : "#999"}
        style={[
          styles.input,
          dark && {
            backgroundColor: "#222",
            color: "#fff",
            borderColor: "#555",
          },
          isError && {
            borderColor: "#FF4D4F",
          },
        ]}
      />

      {isError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: "#555",
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    color: "#000",
  },
  errorText: {
    color: "#FF4D4F",
    marginTop: 4,
    fontSize: 12,
  },
});
