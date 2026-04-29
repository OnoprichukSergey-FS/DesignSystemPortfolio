import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import { router } from "expo-router";

import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Input from "../components/Input";
import { NavBar } from "../components/NavBar";
import Avatar from "../components/Avatar";
import { useTheme } from "../theme/useTheme";

export default function HomeScreen() {
  const [username, setUsername] = useState("Sergey");
  const { isDark, toggleTheme } = useTheme();

  return (
    <View
      style={[
        styles.screen,
        { backgroundColor: isDark ? "#070A12" : "#F6F7FB" },
      ]}
    >
      <ScrollView contentContainerStyle={styles.content}>
        {/* ===== HERO ===== */}
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>NovaUI</Text>

          <Text style={[styles.title, { color: isDark ? "#FFF" : "#111" }]}>
            Build consistent, scalable interfaces with reusable UI components.
          </Text>

          <Text
            style={[styles.subtitle, { color: isDark ? "#CBD5E1" : "#666" }]}
          >
            A modern design system playground with live previews.
          </Text>

          <View style={styles.actions}>
            <Button
              label="Explore Components"
              variant="primary"
              onPress={() => router.push("/components")}
            />

            <Button
              label={isDark ? "Light Mode" : "Dark Mode"}
              variant="secondary"
              onPress={toggleTheme}
            />
          </View>
        </View>

        {/* ===== FEATURES ===== */}
        <View style={styles.grid}>
          <FeatureCard
            title="Reusable Components"
            text="Buttons, cards, inputs, avatars, modals."
            isDark={isDark}
          />
          <FeatureCard
            title="Live Playground"
            text="Edit props and preview instantly."
            isDark={isDark}
          />
          <FeatureCard
            title="Dark Mode System"
            text="Theme-aware UI everywhere."
            isDark={isDark}
          />
        </View>

        {/* ===== COMPONENT PREVIEW ===== */}
        <Text
          style={[styles.sectionTitle, { color: isDark ? "#FFF" : "#111" }]}
        >
          Component Preview
        </Text>

        <View style={styles.grid}>
          <Card dark={isDark}>
            <Text style={styles.cardLabel}>Component</Text>
            <Text style={[styles.cardTitle, textColor(isDark)]}>Button</Text>
            <Text style={[styles.cardText, subTextColor(isDark)]}>
              Reusable CTA buttons.
            </Text>
          </Card>

          <Card dark={isDark}>
            <Text style={styles.cardLabel}>Component</Text>
            <Text style={[styles.cardTitle, textColor(isDark)]}>Card</Text>
            <Text style={[styles.cardText, subTextColor(isDark)]}>
              Flexible layout containers.
            </Text>
          </Card>

          <Card dark={isDark}>
            <Text style={styles.cardLabel}>Component</Text>
            <Text style={[styles.cardTitle, textColor(isDark)]}>Avatar</Text>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Avatar name={username} size={64} />
            </View>
          </Card>
        </View>

        {/* ===== INPUT ===== */}
        <Text
          style={[styles.sectionTitle, { color: isDark ? "#FFF" : "#111" }]}
        >
          Interactive Example
        </Text>

        <Input
          label="Username"
          value={username}
          onChangeText={setUsername}
          error=""
          dark={isDark}
        />
      </ScrollView>

      <NavBar current="home" />
    </View>
  );
}

/* ===== FEATURE CARD ===== */
function FeatureCard({ title, text, isDark }: any) {
  return (
    <Card dark={isDark}>
      <Text style={styles.cardLabel}>Feature</Text>

      <Text style={[styles.cardTitle, textColor(isDark)]}>{title}</Text>

      <Text style={[styles.cardText, subTextColor(isDark)]}>{text}</Text>
    </Card>
  );
}

/* ===== COLORS ===== */
const textColor = (dark: boolean) => ({
  color: dark ? "#FFF" : "#111",
});

const subTextColor = (dark: boolean) => ({
  color: dark ? "#CBD5E1" : "#666",
});

/* ===== STYLES ===== */
const styles = StyleSheet.create({
  screen: { flex: 1 },

  content: {
    padding: 24,
    paddingTop: 80,
    paddingBottom: 120,
    gap: 24,
  },

  hero: {
    alignItems: "center",
    gap: 10,
  },

  eyebrow: {
    color: "#8B7CFF",
    fontWeight: "900",
    letterSpacing: 2,
  },

  title: {
    fontSize: 42,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },

  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },

  grid: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "900",
    marginTop: 10,
  },

  cardLabel: {
    color: "#8B7CFF",
    fontWeight: "900",
    fontSize: 12,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 5,
  },

  cardText: {
    fontSize: 14,
    marginTop: 5,
  },
});
