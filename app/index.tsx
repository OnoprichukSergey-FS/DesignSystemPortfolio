import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Input from "../components/Input";
import { NavBar } from "../components/NavBar";
import { Modal } from "../components/Modal";
import { useTheme } from "../theme/useTheme";
import Avatar from "../components/Avatar";

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const showError = username.length > 0 && username.length < 3;

  return (
    <View
      style={[styles.screen, { backgroundColor: isDark ? "#000" : "#fff" }]}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
          Home Screen
        </Text>

        <Button label="Open Modal" onPress={() => setModalVisible(true)} />

        <Card>
          <Text style={{ fontWeight: "600", marginBottom: 6 }}>
            My First Card
          </Text>
          <Text>Hello from inside the card 👋</Text>
        </Card>

        {/*  AVATAR  */}
        <Avatar name={username || "User"} size={80} />

        <Input
          label="Username"
          value={username}
          onChangeText={setUsername}
          error={showError ? "Must be at least 3 characters" : ""}
          dark={isDark}
        />

        <Button label="Dark Mode" onPress={toggleTheme} />
      </ScrollView>

      <NavBar current="home" />
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    alignItems: "center",
    gap: 24,
    paddingTop: Platform.OS === "web" ? 60 : 80,
    paddingBottom: 140,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
});
