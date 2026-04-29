import React from "react";
import { View, StyleSheet, Platform } from "react-native";

type CardProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export function Card({ children, dark = false }: CardProps) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: dark ? "#111827" : "#FFFFFF",
          borderColor: dark ? "#253149" : "#E5E7EB",
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 150,
    padding: 22,
    borderRadius: 18,
    borderWidth: 1,

    ...Platform.select({
      web: {
        boxShadow: "0px 18px 35px rgba(0,0,0,0.08)",
      },
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
      },
      android: {
        elevation: 3,
      },
    }),
  },
});
