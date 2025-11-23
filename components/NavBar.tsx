import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

type NavBarProps = {
  current: string;
};

export function NavBar({ current }: NavBarProps) {
  const tabs = [
    { label: "home", route: "/" },
    { label: "components", route: "/components" },
    { label: "documentation", route: "/documentation" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <Pressable
          key={tab.label}
          onPress={() => router.push(tab.route)}
          style={styles.item}
        >
          <Text style={[styles.label, current === tab.label && styles.active]}>
            {tab.label.toUpperCase()}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    zIndex: 9999,
    elevation: 10,
  },
  item: {
    paddingVertical: 10,
  },
  label: {
    color: "#666",
    fontSize: 12,
  },
  active: {
    color: "#6A5ACD",
    fontWeight: "700",
  },
});
