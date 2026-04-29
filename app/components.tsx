import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  TextInput,
  Pressable,
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
      <View style={styles.layout}>
        {/* ===== SIDEBAR ===== */}
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* ===== MAIN CONTENT ===== */}
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
            <Text style={styles.eyebrow}>NovaUI Design System</Text>

            <Text
              style={[styles.title, { color: isDark ? "#FFFFFF" : "#111827" }]}
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

          {/* ===== OVERVIEW ===== */}
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

          {/* ===== PLAYGROUND ===== */}
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

          {/* ===== BUTTONS ===== */}
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

          {/* ===== CARDS ===== */}
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

          {/* ===== INPUTS ===== */}
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

          {/* ===== AVATAR ===== */}
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

          {/* ===== MODAL ===== */}
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

      <Text style={styles.codeBlock}>{code}</Text>
    </View>
  );
}

function SimpleCode({ code }: { code: string }) {
  return <Text style={styles.simpleCodeBlock}>{code}</Text>;
}

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

  layout: {
    flex: 1,
    width: "100%",
    maxWidth: 1300,
    alignSelf: "center",
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 24,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "web" ? 50 : 70,
    paddingBottom: 110,
  },

  content: {
    flexGrow: 1,
    flex: 1,
    gap: 24,
    paddingBottom: 40,
  },

  hero: {
    padding: 30,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: "center",
  },

  eyebrow: {
    color: "#8B7CFF",
    fontWeight: "900",
    marginBottom: 12,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  title: {
    fontSize: Platform.OS === "web" ? 42 : 30,
    lineHeight: Platform.OS === "web" ? 50 : 38,
    fontWeight: "900",
    textAlign: "center",
    maxWidth: 850,
  },

  subtitle: {
    marginTop: 16,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 760,
  },

  section: {
    borderWidth: 1,
    borderRadius: 22,
    padding: 24,
    gap: 14,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "900",
  },

  sectionDescription: {
    fontSize: 14,
    lineHeight: 22,
  },

  bodyText: {
    fontSize: 14,
    lineHeight: 22,
  },

  row: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },

  tagRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
    flexWrap: "wrap",
  },

  cardGrid: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 16,
  },

  inputWrap: {
    maxWidth: 500,
  },

  avatarRow: {
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
  },

  previewBox: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginTop: 4,
    marginBottom: 4,
  },

  previewTitle: {
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 14,
  },

  playgroundLabel: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 6,
  },

  playgroundInput: {
    width: "100%",
    maxWidth: 500,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 14,
  },

  successText: {
    color: "#8B7CFF",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 10,
  },

  stateText: {
    fontSize: 12,
    marginTop: 8,
  },

  codeWrapper: {
    position: "relative",
    marginTop: 12,
  },

  copyButton: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 10,
    backgroundColor: "#1E293B",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  copyButtonText: {
    color: "#E5E7EB",
    fontSize: 12,
    fontWeight: "700",
  },

  codeBlock: {
    padding: 14,
    paddingTop: 42,
    borderRadius: 10,
    backgroundColor: "#020617",
    color: "#E5E7EB",
    fontFamily: Platform.OS === "web" ? "monospace" : undefined,
    fontSize: 13,
    lineHeight: 20,
  },

  simpleCodeBlock: {
    marginTop: 12,
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#020617",
    color: "#E5E7EB",
    fontFamily: Platform.OS === "web" ? "monospace" : undefined,
    fontSize: 13,
    lineHeight: 20,
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

  cardLabel: {
    color: "#8B7CFF",
    fontSize: 11,
    fontWeight: "800",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 8,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 4,
  },

  cardText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
