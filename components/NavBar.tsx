import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from "react-native";
import { router } from "expo-router";
import { colors } from "../design-system/tokens";

type NavBarProps = {
  current: string;
};

export function NavBar({ current }: NavBarProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 600;

  const tabs = [
    { label: "Home", key: "home", route: "/" },
    { label: "Components", key: "components", route: "/components" },
    { label: "Docs", key: "documentation", route: "/documentation" },
  ];

  return (
    <View style={[styles.wrapper, { bottom: isMobile ? 14 : 22 }]}>
      <View
        style={[
          styles.container,
          {
            maxWidth: isMobile ? width - 34 : 420,
            padding: isMobile ? 6 : 8,
            gap: isMobile ? 4 : 8,
          },
        ]}
      >
        {tabs.map((tab) => {
          const isActive = current === tab.key;

          return (
            <Pressable
              key={tab.key}
              onPress={() => router.push(tab.route)}
              style={[
                styles.item,
                {
                  paddingVertical: isMobile ? 8 : 10,
                  paddingHorizontal: isMobile ? 13 : 18,
                },
                isActive && styles.activeItem,
              ]}
            >
              <Text
                style={[
                  styles.label,
                  { fontSize: isMobile ? 12 : 14 },
                  isActive && styles.activeLabel,
                ]}
              >
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
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 9999,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",

    ...Platform.select({
      web: {
        boxShadow: "0px 16px 34px rgba(0,0,0,0.12)",
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

  item: {
    borderRadius: 16,
  },

  activeItem: {
    backgroundColor: "#EDEBFF",
  },

  label: {
    color: "#6B7280",
    fontWeight: "800",
  },

  activeLabel: {
    color: colors.primary,
  },
});

export default NavBar;
