import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";

import { NavBar } from "../components/NavBar";
import Tag from "../components/Tag";
import { useTheme } from "../theme/useTheme";

export default function DocumentationScreen() {
  const { isDark } = useTheme();

  return (
    <View
      style={[
        styles.screen,
        { backgroundColor: isDark ? "#070A12" : "#F6F7FB" },
      ]}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ===== HERO ===== */}
        <View
          style={[
            styles.hero,
            {
              backgroundColor: isDark ? "#090E1A" : "#F9FAFB",
              borderColor: isDark ? "#1E293B" : "#EEF0F4",
            },
          ]}
        >
          <Text style={styles.eyebrow}>NovaUI Documentation</Text>

          <Text
            style={[styles.title, { color: isDark ? "#FFFFFF" : "#111827" }]}
          >
            Design decisions, component usage, and system architecture.
          </Text>

          <Text
            style={[styles.subtitle, { color: isDark ? "#CBD5E1" : "#5B6275" }]}
          >
            This page explains how NovaUI is structured, how reusable components
            work, and how the design system supports consistency across web and
            mobile.
          </Text>
        </View>

        {/* ===== OVERVIEW ===== */}
        <DocSection
          title="Overview"
          description="NovaUI is a cross-platform design system playground built with Expo, React Native, TypeScript, and reusable components."
          isDark={isDark}
        >
          <View style={styles.tagRow}>
            <Tag label="Expo" variant="primary" />
            <Tag label="React Native" variant="outline" />
            <Tag label="TypeScript" />
          </View>

          <Text
            style={[styles.bodyText, { color: isDark ? "#CBD5E1" : "#4B5563" }]}
          >
            The goal of this project is to demonstrate how scalable UI systems
            are built using reusable components, shared styling patterns, theme
            support, and documentation-style examples.
          </Text>
        </DocSection>

        {/* ===== HOW TO RUN ===== */}
        <DocSection
          title="How to Run"
          description="Install dependencies, start Expo, and open the app on web or mobile."
          isDark={isDark}
        >
          <CodeBlock
            code={`npm install

npx expo start

# Press w for web
# Press i for iOS simulator`}
          />
        </DocSection>

        {/* ===== TECH STACK ===== */}
        <DocSection
          title="Tech Stack"
          description="The project uses modern cross-platform tools for reusable UI development."
          isDark={isDark}
        >
          <Bullet text="Expo for cross-platform development" isDark={isDark} />
          <Bullet text="React Native for web and mobile UI" isDark={isDark} />
          <Bullet text="TypeScript for typed component props" isDark={isDark} />
          <Bullet text="Expo Router for page navigation" isDark={isDark} />
          <Bullet text="AsyncStorage for theme persistence" isDark={isDark} />
        </DocSection>

        {/* ===== PROJECT STRUCTURE ===== */}
        <DocSection
          title="Project Structure"
          description="Files are organized by pages, reusable components, design tokens, and theme logic."
          isDark={isDark}
        >
          <CodeBlock
            code={`app/
  _layout.tsx
  index.tsx
  components.tsx
  documentation.tsx

components/
  Button.tsx
  Card.tsx
  Input.tsx
  Modal.tsx
  Avatar.tsx
  NavBar.tsx
  Sidebar.tsx
  Tag.tsx

design-system/
  tokens.js

theme/
  useTheme.ts`}
          />
        </DocSection>

        {/* ===== DESIGN TOKENS ===== */}
        <DocSection
          title="Design Tokens"
          description="Design tokens keep the interface consistent by centralizing values for colors, spacing, and border radius."
          isDark={isDark}
        >
          <CodeBlock
            code={`export const colors = {
  primary: "#6C5CE7",
  background: "#F6F7FB",
  text: "#111827",
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 22,
  xl: 32,
};

export const radius = {
  sm: 6,
  md: 12,
  lg: 20,
};`}
          />
        </DocSection>

        {/* ===== COMPONENT API ===== */}
        <DocSection
          title="Component API"
          description="Each reusable component accepts props that control appearance, content, and behavior."
          isDark={isDark}
        >
          <PropsTable
            isDark={isDark}
            rows={[
              ["Button", "label, variant, onPress", "Reusable action button"],
              ["Card", "children, dark", "Content container"],
              ["Input", "label, value, error, dark", "Controlled form input"],
              ["Modal", "visible, onClose", "Reusable overlay dialog"],
              ["Avatar", "name, size, showName", "Generated user avatar"],
            ]}
          />
        </DocSection>

        {/* ===== BUTTON EXAMPLE ===== */}
        <DocSection
          title="Button Usage"
          description="Buttons use variants to show action priority."
          isDark={isDark}
        >
          <CodeBlock
            code={`<Button
  label="Primary"
  variant="primary"
  onPress={() => console.log("Clicked")}
/>`}
          />
        </DocSection>

        {/* ===== INPUT EXAMPLE ===== */}
        <DocSection
          title="Input Usage"
          description="Inputs support controlled values, labels, validation, and dark mode."
          isDark={isDark}
        >
          <CodeBlock
            code={`<Input
  label="Username"
  value={username}
  onChangeText={setUsername}
  error={showError ? "Must be at least 3 characters" : ""}
  dark={isDark}
/>`}
          />
        </DocSection>

        {/* ===== THEME SYSTEM ===== */}
        <DocSection
          title="Theme System"
          description="The theme hook controls light and dark mode and saves the user's preference."
          isDark={isDark}
        >
          <CodeBlock
            code={`const { isDark, toggleTheme } = useTheme();

<Button
  label={isDark ? "Light Mode" : "Dark Mode"}
  onPress={toggleTheme}
/>`}
          />
        </DocSection>

        {/* ===== DESIGN PRINCIPLES ===== */}
        <DocSection
          title="Design System Principles"
          description="The project follows practical UI architecture principles used in real design systems."
          isDark={isDark}
        >
          <Bullet
            text="Reusable components reduce repeated code."
            isDark={isDark}
          />
          <Bullet
            text="Shared styling creates consistency across screens."
            isDark={isDark}
          />
          <Bullet
            text="Dark mode support improves flexibility and accessibility."
            isDark={isDark}
          />
          <Bullet
            text="Documentation makes the system easier for other developers to use."
            isDark={isDark}
          />
          <Bullet
            text="The live playground improves testing and developer experience."
            isDark={isDark}
          />
        </DocSection>
      </ScrollView>

      <NavBar current="documentation" />
    </View>
  );
}

/* ===== REUSABLE DOCUMENTATION SECTION ===== */
function DocSection({
  title,
  description,
  children,
  isDark,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  isDark: boolean;
}) {
  return (
    <View
      style={[
        styles.section,
        {
          backgroundColor: isDark ? "#111827" : "#FFFFFF",
          borderColor: isDark ? "#253149" : "#E5E7EB",
        },
      ]}
    >
      <Text
        style={[styles.sectionTitle, { color: isDark ? "#FFFFFF" : "#111827" }]}
      >
        {title}
      </Text>

      <Text
        style={[styles.sectionText, { color: isDark ? "#CBD5E1" : "#6B7280" }]}
      >
        {description}
      </Text>

      {children && <View style={styles.sectionContent}>{children}</View>}
    </View>
  );
}

/* ===== BULLET ITEM ===== */
function Bullet({ text, isDark }: { text: string; isDark: boolean }) {
  return (
    <Text style={[styles.bullet, { color: isDark ? "#CBD5E1" : "#4B5563" }]}>
      • {text}
    </Text>
  );
}

/* ===== CODE BLOCK ===== */
function CodeBlock({ code }: { code: string }) {
  return <Text style={styles.codeBlock}>{code}</Text>;
}

/* ===== PROPS TABLE ===== */
function PropsTable({ rows, isDark }: { rows: string[][]; isDark: boolean }) {
  return (
    <View
      style={[
        styles.propsTable,
        { borderColor: isDark ? "#253149" : "#E5E7EB" },
      ]}
    >
      <View
        style={[
          styles.propsRow,
          { backgroundColor: isDark ? "#0B1220" : "#F9FAFB" },
        ]}
      >
        <Text
          style={[
            styles.propsHeader,
            { color: isDark ? "#FFFFFF" : "#111827" },
          ]}
        >
          Component
        </Text>
        <Text
          style={[
            styles.propsHeader,
            { color: isDark ? "#FFFFFF" : "#111827" },
          ]}
        >
          Props
        </Text>
        <Text
          style={[
            styles.propsHeader,
            { color: isDark ? "#FFFFFF" : "#111827" },
          ]}
        >
          Purpose
        </Text>
      </View>

      {rows.map((row) => (
        <View key={row[0]} style={styles.propsRow}>
          <Text
            style={[
              styles.propsCell,
              { color: isDark ? "#CBD5E1" : "#4B5563" },
            ]}
          >
            {row[0]}
          </Text>

          <Text style={[styles.propsCell, { color: "#8B7CFF" }]}>{row[1]}</Text>

          <Text
            style={[
              styles.propsCell,
              { color: isDark ? "#CBD5E1" : "#4B5563" },
            ]}
          >
            {row[2]}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  content: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "web" ? 70 : 80,
    paddingBottom: 140,
    gap: 24,
  },

  hero: {
    alignItems: "center",
    padding: 34,
    borderRadius: 22,
    borderWidth: 1,
  },

  eyebrow: {
    color: "#8B7CFF",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 14,
  },

  title: {
    fontSize: Platform.OS === "web" ? 44 : 30,
    lineHeight: Platform.OS === "web" ? 52 : 38,
    fontWeight: "900",
    textAlign: "center",
    maxWidth: 850,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    maxWidth: 720,
    marginTop: 16,
  },

  section: {
    borderWidth: 1,
    borderRadius: 22,
    padding: 24,
    gap: 12,

    ...Platform.select({
      web: {
        boxShadow: "0px 18px 35px rgba(0,0,0,0.06)",
      },
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 6 },
      },
      android: {
        elevation: 2,
      },
    }),
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "900",
  },

  sectionText: {
    fontSize: 15,
    lineHeight: 24,
    maxWidth: 850,
  },

  sectionContent: {
    gap: 10,
    marginTop: 6,
  },

  bodyText: {
    fontSize: 14,
    lineHeight: 22,
  },

  tagRow: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: 6,
  },

  bullet: {
    fontSize: 15,
    lineHeight: 24,
  },

  codeBlock: {
    marginTop: 8,
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#020617",
    color: "#E5E7EB",
    fontFamily: Platform.OS === "web" ? "monospace" : undefined,
    fontSize: 13,
    lineHeight: 20,
    overflow: "hidden",
  },

  propsTable: {
    borderWidth: 1,
    borderRadius: 14,
    overflow: "hidden",
    marginTop: 8,
  },

  propsRow: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 12,
    gap: 12,
  },

  propsHeader: {
    flex: 1,
    fontSize: 13,
    fontWeight: "900",
  },

  propsCell: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
  },
});
