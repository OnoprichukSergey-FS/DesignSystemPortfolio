import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { useTheme } from "../theme/useTheme";

type SidebarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const sections = [
  "Overview",
  "Playground",
  "Buttons",
  "Cards",
  "Inputs",
  "Avatar",
  "Modal",
];

export default function Sidebar({
  activeSection,
  setActiveSection,
}: SidebarProps) {
  const { isDark } = useTheme();

  return (
    <View
      style={[
        styles.sidebar,
        {
          backgroundColor: isDark ? "#020617" : "#FFFFFF",
          borderColor: isDark ? "#1E293B" : "#E5E7EB",
        },
      ]}
    >
      <Text style={[styles.logo, { color: isDark ? "#FFFFFF" : "#111827" }]}>
        NovaUI
      </Text>

      <Text style={styles.subLogo}>Design System</Text>

      <View style={styles.nav}>
        {sections.map((section) => {
          const isActive = activeSection === section;

          return (
            <Pressable
              key={section}
              onPress={() => setActiveSection(section)}
              style={[
                styles.navItem,
                isActive && {
                  backgroundColor: isDark ? "#1E293B" : "#EDEBFF",
                },
              ]}
            >
              <Text
                style={[
                  styles.navText,
                  {
                    color: isActive
                      ? "#8B7CFF"
                      : isDark
                      ? "#CBD5E1"
                      : "#4B5563",
                  },
                ]}
              >
                {section}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: Platform.OS === "web" ? 230 : "100%",
    padding: 20,
    borderWidth: 1,
    borderRadius: 22,
  },

  logo: {
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 4,
  },

  subLogo: {
    color: "#8B7CFF",
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 22,
  },

  nav: {
    gap: 8,
  },

  navItem: {
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  navText: {
    fontSize: 14,
    fontWeight: "800",
  },
});
