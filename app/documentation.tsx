import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import Input from "../components/Input";
import { Card } from "../components/Card";
import Avatar from "../components/Avatar";
import { colors, spacing, radius } from "../design-system/tokens";
import { useTheme } from "../theme/useTheme";

export default function DocumentationScreen() {
  const [value, setValue] = useState("");
  const { isDark, toggleTheme } = useTheme();

  const showError = value.length > 0 && value.length < 3;

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor: isDark ? "#000" : "#fff" }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
        Design System Documentation
      </Text>

      {/* AVATAR SHOWCASE */}
      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Avatar
      </Text>
      <Avatar name="Sergey" size={70} />

      {/*  COLORS */}
      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Colors
      </Text>
      <View style={styles.row}>
        {Object.entries(colors).map(([name, value]) => (
          <View key={name} style={styles.tokenItem}>
            <View style={[styles.colorSwatch, { backgroundColor: value }]} />
            <Text style={{ color: isDark ? "#fff" : "#000" }}>{name}</Text>
            <Text style={styles.tokenValue}>{value}</Text>
          </View>
        ))}
      </View>

      {/*  SPACING */}
      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Spacing
      </Text>
      <View style={styles.row}>
        {Object.entries(spacing).map(([name, value]) => (
          <View key={name} style={styles.tokenItem}>
            <View style={[styles.spacingBox, { height: value }]} />
            <Text style={{ color: isDark ? "#fff" : "#000" }}>{name}</Text>
            <Text style={styles.tokenValue}>{value}</Text>
          </View>
        ))}
      </View>

      {/*  RADIUS */}
      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Radius
      </Text>
      <View style={styles.row}>
        {Object.entries(radius).map(([name, value]) => (
          <View key={name} style={styles.tokenItem}>
            <View style={[styles.radiusBox, { borderRadius: value }]} />
            <Text style={{ color: isDark ? "#fff" : "#000" }}>{name}</Text>
            <Text style={styles.tokenValue}>{value}</Text>
          </View>
        ))}
      </View>

      {/* BUTTONS */}
      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Buttons
      </Text>
      <Button label="Primary" variant="primary" onPress={() => {}} />
      <Button label="Secondary" variant="secondary" onPress={() => {}} />
      <Button label="Ghost" variant="ghost" onPress={() => {}} />

      {/*  INPUT */}
      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Input with Validation
      </Text>
      <Input
        label="Example Input"
        value={value}
        onChangeText={setValue}
        error={showError ? "At least 3 characters" : ""}
        dark={isDark}
      />

      {/* CARD */}
      <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#000" }]}>
        Card
      </Text>
      <Card>
        <Text style={{ fontWeight: "600", marginBottom: 6 }}>Card Example</Text>
        <Text>This card uses shared spacing and radius tokens.</Text>
      </Card>

      {/*  THEME TOGGLE */}
      <Button label="Toggle Theme" onPress={toggleTheme} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { padding: 24, paddingBottom: 80 },
  title: { fontSize: 24, marginBottom: 16, fontWeight: "700" },
  sectionTitle: {
    fontSize: 18,
    marginTop: 24,
    marginBottom: 8,
    fontWeight: "600",
  },
  row: { flexDirection: "row", flexWrap: "wrap", marginBottom: 12 },
  tokenItem: { width: "45%", marginRight: "5%", marginBottom: 12 },
  colorSwatch: { height: 32, borderRadius: 8, marginBottom: 4 },
  spacingBox: {
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 4,
    marginBottom: 4,
  },
  radiusBox: {
    width: "100%",
    height: 32,
    backgroundColor: "#ddd",
    marginBottom: 4,
  },
  tokenValue: { fontSize: 12, color: "#777" },
});
