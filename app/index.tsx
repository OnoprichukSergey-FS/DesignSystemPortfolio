import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  useWindowDimensions,
} from "react-native";
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
  const { width } = useWindowDimensions();

  const isMobile = width < 768;
  const isSmallMobile = width < 430;

  return (
    <View
      style={[
        styles.screen,
        { backgroundColor: isDark ? "#070A12" : "#F6F7FB" },
      ]}
    >
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            paddingHorizontal: isMobile ? 18 : 24,
            paddingTop: isMobile ? 44 : 80,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>NovaUI</Text>

          <Text
            style={[
              styles.title,
              {
                color: isDark ? "#FFF" : "#111827",
                fontSize: isSmallMobile ? 34 : isMobile ? 38 : 42,
                lineHeight: isSmallMobile ? 40 : isMobile ? 44 : 50,
              },
            ]}
          >
            Build consistent, scalable interfaces with reusable UI components.
          </Text>

          <Text
            style={[styles.subtitle, { color: isDark ? "#CBD5E1" : "#666" }]}
          >
            A modern design system playground with live previews.
          </Text>

          <View
            style={[
              styles.actions,
              { flexDirection: isMobile ? "column" : "row" },
            ]}
          >
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

        <View
          style={[styles.grid, { flexDirection: isMobile ? "column" : "row" }]}
        >
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

        <Text
          style={[styles.sectionTitle, { color: isDark ? "#FFF" : "#111827" }]}
        >
          Component Preview
        </Text>

        <View
          style={[styles.grid, { flexDirection: isMobile ? "column" : "row" }]}
        >
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

        <Text
          style={[styles.sectionTitle, { color: isDark ? "#FFF" : "#111827" }]}
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

function FeatureCard({ title, text, isDark }: any) {
  return (
    <Card dark={isDark}>
      <Text style={styles.cardLabel}>Feature</Text>
      <Text style={[styles.cardTitle, textColor(isDark)]}>{title}</Text>
      <Text style={[styles.cardText, subTextColor(isDark)]}>{text}</Text>
    </Card>
  );
}

const textColor = (dark: boolean) => ({
  color: dark ? "#FFF" : "#111827",
});

const subTextColor = (dark: boolean) => ({
  color: dark ? "#CBD5E1" : "#666",
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  content: {
    paddingBottom: 130,
    gap: 22,
  },

  hero: {
    alignItems: "center",
    gap: 10,
  },

  eyebrow: {
    color: "#8B7CFF",
    fontWeight: "900",
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  title: {
    fontWeight: "900",
    textAlign: "center",
    maxWidth: 900,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    maxWidth: 620,
  },

  actions: {
    gap: 12,
    marginTop: 10,
    alignItems: "center",
  },

  grid: {
    gap: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "900",
    marginTop: 6,
  },

  cardLabel: {
    color: "#8B7CFF",
    fontWeight: "900",
    fontSize: 12,
    textTransform: "uppercase",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 5,
  },

  cardText: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },
});
