import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { router } from "expo-router";
import { colors, radius, spacing } from "../design-system/tokens";

// Props for tracking the active screen
type NavBarProps = {
  current: string;
};

export function NavBar({ current }: NavBarProps) {
  // Main navigation tabs
  const tabs = [
    { label: "Home", key: "home", route: "/" },
    { label: "Components", key: "components", route: "/components" },
    { label: "Docs", key: "documentation", route: "/documentation" },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {tabs.map((tab) => {
          const isActive = current === tab.key;

          return (
            <Pressable
              key={tab.key}
              onPress={() => router.push(tab.route)}
              style={[styles.item, isActive && styles.activeItem]}
            >
              <Text style={[styles.label, isActive && styles.activeLabel]}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Keeps nav fixed at the bottom
  wrapper: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 9999,
  },

  // Floating navigation container
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
    borderRadius: radius.lg,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",

    ...Platform.select({
      web: {
        boxShadow: "0px 18px 35px rgba(0,0,0,0.12)",
      },
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 8 },
      },
      android: {
        elevation: 8,
      },
    }),
  },

  // Individual tab
  item: {
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
  },

  // Active tab background
  activeItem: {
    backgroundColor: "#EDEBFF",
  },

  // Default label
  label: {
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "700",
  },

  // Active label
  activeLabel: {
    color: colors.primary,
  },
});
