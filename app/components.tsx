import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  TextInput,
  Pressable,
  useWindowDimensions,
} from "react-native";

import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Input from "../components/Input";
import Avatar from "../components/Avatar";
import { NavBar } from "../components/NavBar";
import { Modal } from "../components/Modal";
import Tag from "../components/Tag";
import Sidebar from "../components/Sidebar";

import { useTheme } from "../theme/useTheme";

type ButtonVariant = "primary" | "secondary" | "ghost";

const sections = [
  "Overview",
  "Playground",
  "Buttons",
  "Cards",
  "Inputs",
  "Avatar",
  "Modal",
];

export default function ComponentsScreen() {
  const [activeSection, setActiveSection] = useState("Overview");

  const [demoText, setDemoText] = useState("Design System");
  const [modalVisible, setModalVisible] = useState(false);

  const [playgroundLabel, setPlaygroundLabel] = useState("Click Me");
  const [playgroundVariant, setPlaygroundVariant] =
    useState<ButtonVariant>("primary");

  const [clicked, setClicked] = useState(false);
  const [copied, setCopied] = useState(false);

  const { isDark, toggleTheme } = useTheme();
  const { width } = useWindowDimensions();

  const isMobile = width < 768;

  const liveCode = `<Button
  label="${playgroundLabel || "Preview Button"}"
  variant="${playgroundVariant}"
  onPress={() => setClicked(true)}
/>`;

  async function copyCode() {
    if (Platform.OS === "web" && navigator?.clipboard) {
      await navigator.clipboard.writeText(liveCode);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  }

  function handleVariantChange(variant: ButtonVariant) {
    setPlaygroundVariant(variant);
    setClicked(false);
  }

  return (
    <View
      style={[
        styles.screen,
        { backgroundColor: isDark ? "#070A12" : "#F6F7FB" },
      ]}
    >
      <View
        style={[
          styles.layout,
          {
            flexDirection: isMobile ? "column" : "row",
            paddingHorizontal: isMobile ? 16 : 24,
            paddingTop: isMobile ? 28 : 50,
          },
        ]}
      >
        {!isMobile && (
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        )}

        {isMobile && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.mobileTabs}
          >
            {sections.map((section) => (
              <Pressable
                key={section}
                onPress={() => setActiveSection(section)}
                style={[
                  styles.mobileTab,
                  activeSection === section && styles.mobileTabActive,
                ]}
              >
                <Text
                  style={[
                    styles.mobileTabText,
                    activeSection === section && styles.mobileTabTextActive,
                  ]}
                >
                  {section}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        )}

        <ScrollView
          contentContainerStyle={[
            styles.content,
            {
              paddingBottom: isMobile ? 130 : 40,
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.hero,
              {
                padding: isMobile ? 24 : 30,
                backgroundColor: isDark ? "#090E1A" : "#F9FAFB",
                borderColor: isDark ? "#1E293B" : "#EEF0F4",
              },
            ]}
          >
            <Text style={styles.eyebrow}>NovaUI Design System</Text>

            <Text
              style={[
                styles.title,
                {
                  color: isDark ? "#FFFFFF" : "#111827",
                  fontSize: isMobile ? 34 : 42,
                  lineHeight: isMobile ? 40 : 50,
                },
              ]}
            >
              A polished UI component playground with live JSX previews.
            </Text>

            <Text
              style={[
                styles.subtitle,
                { color: isDark ? "#CBD5E1" : "#5B6275" },
              ]}
            >
              Built with Expo, React Native, TypeScript, reusable components,
              dark mode, documentation-style sections, and developer tooling.
            </Text>
          </View>

          {activeSection === "Overview" && (
            <Section
              title="Why This Exists"
              description="This project simulates a real-world design system used by development teams to keep interfaces consistent, reusable, and easier to maintain."
              isDark={isDark}
            >
              <View style={styles.tagRow}>
                <Tag label="Reusable UI" variant="primary" />
                <Tag label="Design System" variant="outline" />
                <Tag label="Developer Tool" />
              </View>

              <Text
                style={[
                  styles.bodyText,
                  { color: isDark ? "#CBD5E1" : "#4B5563" },
                ]}
              >
                Instead of rebuilding buttons, cards, inputs, avatars, and
                modals from scratch, this app organizes them into reusable
                components with shared styling patterns.
              </Text>

              <Text
                style={[
                  styles.bodyText,
                  { color: isDark ? "#CBD5E1" : "#4B5563" },
                ]}
              >
                The goal is to show component architecture, theme support, live
                prop editing, reusable design tokens, and documentation-style
                developer experience.
              </Text>
            </Section>
          )}

          {activeSection === "Playground" && (
            <Section
              title="Live Component Playground"
              description="Edit props, preview behavior, and watch the JSX update in real time."
              isDark={isDark}
            >
              <View style={styles.tagRow}>
                <Tag label="Interactive" variant="primary" />
                <Tag label="Props" variant="outline" />
                <Tag label="Live Preview" />
              </View>

              <Text
                style={[
                  styles.playgroundLabel,
                  { color: isDark ? "#E5E7EB" : "#374151" },
                ]}
              >
                Button Label
              </Text>

              <TextInput
                value={playgroundLabel}
                onChangeText={(text) => {
                  setPlaygroundLabel(text);
                  setClicked(false);
                  setCopied(false);
                }}
                placeholder="Enter button label"
                placeholderTextColor={isDark ? "#94A3B8" : "#9CA3AF"}
                style={[
                  styles.playgroundInput,
                  {
                    backgroundColor: isDark ? "#0B1220" : "#FFFFFF",
                    color: isDark ? "#FFFFFF" : "#111827",
                    borderColor: isDark ? "#253149" : "#E5E7EB",
                  },
                ]}
              />

              <Text
                style={[
                  styles.playgroundLabel,
                  { color: isDark ? "#E5E7EB" : "#374151" },
                ]}
              >
                Button Variant
              </Text>

              <View style={styles.row}>
                <Button
                  label="Primary"
                  variant="primary"
                  onPress={() => handleVariantChange("primary")}
                />
                <Button
                  label="Secondary"
                  variant="secondary"
                  onPress={() => handleVariantChange("secondary")}
                />
                <Button
                  label="Ghost"
                  variant="ghost"
                  onPress={() => handleVariantChange("ghost")}
                />
              </View>

              <View
                style={[
                  styles.previewBox,
                  {
                    backgroundColor: isDark ? "#0B1220" : "#F9FAFB",
                    borderColor: isDark ? "#253149" : "#E5E7EB",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.previewTitle,
                    { color: isDark ? "#FFFFFF" : "#111827" },
                  ]}
                >
                  Live Preview
                </Text>

                <Button
                  label={playgroundLabel || "Preview Button"}
                  variant={playgroundVariant}
                  onPress={() => setClicked(true)}
                />

                {clicked && (
                  <Text style={styles.successText}>✅ Button was clicked!</Text>
                )}

                <Text
                  style={[
                    styles.stateText,
                    { color: isDark ? "#94A3B8" : "#6B7280" },
                  ]}
                >
                  State: {clicked ? "Clicked" : "Idle"} | Variant:{" "}
                  {playgroundVariant}
                </Text>
              </View>

              <CodeBlock code={liveCode} copied={copied} onCopy={copyCode} />
            </Section>
          )}

          {activeSection === "Buttons" && (
            <Section
              title="Buttons"
              description="Buttons show different action levels: primary, secondary, and ghost."
              isDark={isDark}
            >
              <View style={styles.tagRow}>
                <Tag label="Button" variant="primary" />
                <Tag label="Interactive" variant="outline" />
                <Tag label="Reusable" />
              </View>

              <View style={styles.row}>
                <Button
                  label="Primary"
                  variant="primary"
                  onPress={() => setModalVisible(true)}
                />
                <Button
                  label="Secondary"
                  variant="secondary"
                  onPress={toggleTheme}
                />
                <Button
                  label="Ghost"
                  variant="ghost"
                  onPress={() => setModalVisible(true)}
                />
              </View>

              <PropsTable
                isDark={isDark}
                rows={[
                  ["label", "string", "Text displayed inside the button"],
                  [
                    "variant",
                    '"primary" | "secondary" | "ghost"',
                    "Controls visual emphasis",
                  ],
                  ["onPress", "function", "Runs when the button is pressed"],
                ]}
              />

              <SimpleCode
                code={`<Button label="Primary" variant="primary" />`}
              />
            </Section>
          )}

          {activeSection === "Cards" && (
            <Section
              title="Cards"
              description="Cards group related content into clean, reusable containers."
              isDark={isDark}
            >
              <View style={styles.tagRow}>
                <Tag label="Layout" variant="primary" />
                <Tag label="Reusable" variant="outline" />
              </View>

              <View style={styles.cardGrid}>
                <Card>
                  <Text
                    style={[
                      styles.cardLabel,
                      {
                        backgroundColor: isDark
                          ? "rgba(139,124,255,0.22)"
                          : "rgba(108,92,231,0.1)",
                      },
                    ]}
                  >
                    CARD
                  </Text>

                  <Text
                    style={[
                      styles.cardTitle,
                      { color: isDark ? "#FFFFFF" : "#111827" },
                    ]}
                  >
                    Analytics Preview
                  </Text>

                  <Text
                    style={[
                      styles.cardText,
                      { color: isDark ? "#CBD5E1" : "#6B7280" },
                    ]}
                  >
                    Used for dashboards and grouped content.
                  </Text>
                </Card>

                <Card>
                  <Text
                    style={[
                      styles.cardLabel,
                      {
                        backgroundColor: isDark
                          ? "rgba(139,124,255,0.22)"
                          : "rgba(108,92,231,0.1)",
                      },
                    ]}
                  >
                    CARD
                  </Text>

                  <Text
                    style={[
                      styles.cardTitle,
                      { color: isDark ? "#FFFFFF" : "#111827" },
                    ]}
                  >
                    Project Preview
                  </Text>

                  <Text
                    style={[
                      styles.cardText,
                      { color: isDark ? "#CBD5E1" : "#6B7280" },
                    ]}
                  >
                    Useful for portfolio previews and sections.
                  </Text>
                </Card>
              </View>

              <PropsTable
                isDark={isDark}
                rows={[
                  [
                    "children",
                    "ReactNode",
                    "Content displayed inside the card",
                  ],
                ]}
              />

              <SimpleCode code={`<Card>...</Card>`} />
            </Section>
          )}

          {activeSection === "Inputs" && (
            <Section
              title="Inputs"
              description="Inputs include labels, validation, and dark mode support."
              isDark={isDark}
            >
              <View style={styles.tagRow}>
                <Tag label="Form" variant="primary" />
                <Tag label="Validation" variant="outline" />
              </View>

              <View style={styles.inputWrap}>
                <Input
                  label="Component Name"
                  value={demoText}
                  onChangeText={setDemoText}
                  error={
                    demoText.length > 0 && demoText.length < 3
                      ? "Must be at least 3 characters"
                      : ""
                  }
                  dark={isDark}
                />
              </View>

              <PropsTable
                isDark={isDark}
                rows={[
                  ["label", "string", "Input label"],
                  ["value", "string", "Controlled input value"],
                  ["onChangeText", "function", "Updates input value"],
                  ["error", "string", "Optional validation message"],
                  ["dark", "boolean", "Controls dark mode styling"],
                ]}
              />

              <SimpleCode code={`<Input label="Name" value={value} />`} />
            </Section>
          )}

          {activeSection === "Avatar" && (
            <Section
              title="Avatar"
              description="Displays a user image or generated initials."
              isDark={isDark}
            >
              <View style={styles.tagRow}>
                <Tag label="User" variant="primary" />
                <Tag label="Profile" variant="outline" />
              </View>

              <View style={styles.avatarRow}>
                <Avatar name="Sergey Onoprichuk" size={72} />
                <Avatar name="Full Stack" size={72} />
                <Avatar name="UI System" size={72} showName={false} />
              </View>

              <PropsTable
                isDark={isDark}
                rows={[
                  ["name", "string", "Name used for initials"],
                  ["size", "number", "Avatar size"],
                  ["showName", "boolean", "Shows or hides name label"],
                ]}
              />

              <SimpleCode code={`<Avatar name="User" size={60} />`} />
            </Section>
          )}

          {activeSection === "Modal" && (
            <Section
              title="Modal"
              description="Reusable modal working across web and mobile."
              isDark={isDark}
            >
              <View style={styles.tagRow}>
                <Tag label="Overlay" variant="primary" />
                <Tag label="UX" variant="outline" />
              </View>

              <Button
                label="Open Modal Preview"
                variant="primary"
                onPress={() => setModalVisible(true)}
              />

              <PropsTable
                isDark={isDark}
                rows={[
                  ["visible", "boolean", "Controls whether modal is shown"],
                  ["onClose", "function", "Closes the modal"],
                ]}
              />

              <SimpleCode
                code={`<Modal visible={open} onClose={() => setOpen(false)} />`}
              />
            </Section>
          )}
        </ScrollView>
      </View>

      <NavBar current="components" />
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

function Section({
  title,
  description,
  children,
  isDark,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
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
        style={[
          styles.sectionDescription,
          { color: isDark ? "#CBD5E1" : "#6B7280" },
        ]}
      >
        {description}
      </Text>

      <View>{children}</View>
    </View>
  );
}

function CodeBlock({
  code,
  copied,
  onCopy,
}: {
  code: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <View style={styles.codeWrapper}>
      <Pressable style={styles.copyButton} onPress={onCopy}>
        <Text style={styles.copyButtonText}>{copied ? "Copied" : "Copy"}</Text>
      </Pressable>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text style={styles.codeBlock}>{code}</Text>
      </ScrollView>
    </View>
  );
}

function SimpleCode({ code }: { code: string }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Text style={styles.simpleCodeBlock}>{code}</Text>
    </ScrollView>
  );
}

function PropsTable({ rows, isDark }: { rows: string[][]; isDark: boolean }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
            style={[styles.propsHeader, { color: isDark ? "#FFF" : "#111827" }]}
          >
            Prop
          </Text>
          <Text
            style={[styles.propsHeader, { color: isDark ? "#FFF" : "#111827" }]}
          >
            Type
          </Text>
          <Text
            style={[styles.propsHeader, { color: isDark ? "#FFF" : "#111827" }]}
          >
            Description
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
            <Text style={[styles.propsCell, { color: "#8B7CFF" }]}>
              {row[1]}
            </Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  layout: {
    flex: 1,
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    gap: 20,
    paddingBottom: 120,
  },

  content: {
    flexGrow: 1,
    gap: 20,
  },

  /* ---------------- MOBILE TABS ---------------- */

  mobileTabs: {
    gap: 8,
    paddingBottom: 6,
    paddingHorizontal: 4,
  },

  mobileTab: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  mobileTabActive: {
    backgroundColor: "#EDE9FE",
    borderColor: "#C4B5FD",
  },

  mobileTabText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#4B5563",
  },

  mobileTabTextActive: {
    color: "#8B7CFF",
  },

  /* ---------------- HERO ---------------- */

  hero: {
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    width: "100%",
  },

  eyebrow: {
    color: "#8B7CFF",
    fontWeight: "900",
    marginBottom: 10,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 12,
  },

  title: {
    fontWeight: "900",
    textAlign: "center",
    maxWidth: 720,
    fontSize: 30, // 🔥 FIXED mobile scaling
    lineHeight: 36,
  },

  subtitle: {
    marginTop: 14,
    textAlign: "center",
    lineHeight: 21,
    maxWidth: 640,
    fontSize: 14,
  },

  /* ---------------- SECTIONS ---------------- */

  section: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 18,
    gap: 14,
    width: "100%",
  },

  sectionTitle: {
    fontSize: 20, // 🔥 smaller for mobile
    fontWeight: "900",
  },

  sectionDescription: {
    fontSize: 13,
    lineHeight: 20,
  },

  bodyText: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
  },

  /* ---------------- ROWS ---------------- */

  row: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },

  tagRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 8,
    flexWrap: "wrap",
  },

  cardGrid: {
    flexDirection: "column", // 🔥 FORCE STACK ON MOBILE
    gap: 14,
  },

  inputWrap: {
    width: "100%",
    maxWidth: 100,
  },

  avatarRow: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
  },

  /* ---------------- PREVIEW ---------------- */

  previewBox: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginTop: 4,
  },

  previewTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 12,
  },

  playgroundLabel: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 5,
  },

  playgroundInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 12,
  },

  successText: {
    color: "#8B7CFF",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 8,
  },

  stateText: {
    fontSize: 11,
    marginTop: 6,
  },

  /* ---------------- CODE ---------------- */

  codeWrapper: {
    position: "relative",
    marginTop: 10,
    width: "100%",
  },

  copyButton: {
    position: "absolute",
    right: 8,
    top: 8,
    zIndex: 10,
    backgroundColor: "#1E293B",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  copyButtonText: {
    color: "#E5E7EB",
    fontSize: 11,
    fontWeight: "700",
  },

  codeBlock: {
    minWidth: 260,
    padding: 12,
    paddingTop: 36,
    borderRadius: 10,
    backgroundColor: "#020617",
    color: "#E5E7EB",
    fontSize: 12,
    lineHeight: 18,
  },

  simpleCodeBlock: {
    minWidth: 240,
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#020617",
    color: "#E5E7EB",
    fontSize: 12,
    lineHeight: 18,
  },

  /* ---------------- TABLE ---------------- */

  propsTable: {
    minWidth: 500,
    borderWidth: 1,
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 8,
  },

  propsRow: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 10,
  },

  propsHeader: {
    width: 150,
    fontSize: 12,
    fontWeight: "900",
  },

  propsCell: {
    width: 150,
    fontSize: 12,
    lineHeight: 18,
  },

  /* ---------------- CARD ---------------- */

  cardLabel: {
    color: "#8B7CFF",
    fontSize: 10,
    fontWeight: "800",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 6,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 4,
  },

  cardText: {
    fontSize: 13,
    lineHeight: 18,
  },
});
