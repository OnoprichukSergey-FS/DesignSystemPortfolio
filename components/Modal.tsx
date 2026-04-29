import React from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  Modal as RNModal,
  StyleSheet,
} from "react-native";
import { colors, radius, spacing } from "../design-system/tokens";

// Props for controlling modal visibility
type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function Modal({ visible, onClose }: ModalProps) {
  const isWeb = Platform.OS === "web";

  // Prevent rendering when not visible
  if (!visible) return null;

  // ===== WEB VERSION =====
  if (isWeb) {
    return (
      <View style={styles.overlay} pointerEvents="auto">
        <View style={styles.container}>
          <Text style={styles.title}>Modal Preview</Text>

          <Text style={styles.text}>
            This is a reusable modal component built for both web and mobile
            using Expo.
          </Text>

          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // ===== MOBILE VERSION =====
  return (
    <RNModal visible={visible} transparent animationType="fade">
      <View style={styles.overlay} pointerEvents="auto">
        <View style={styles.container}>
          <Text style={styles.title}>Modal Preview</Text>

          <Text style={styles.text}>
            This is a reusable modal component built for both web and mobile
            using Expo.
          </Text>

          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  // Shared overlay (works for both web + mobile)
  overlay: {
    position: Platform.OS === "web" ? ("fixed" as any) : "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  // Modal container
  container: {
    width: Platform.OS === "web" ? 420 : "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: radius.lg,
    padding: spacing.lg,
    alignItems: "center",

    // Cross-platform shadow
    ...Platform.select({
      web: {
        boxShadow: "0px 25px 60px rgba(0,0,0,0.2)",
      },
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 10 },
      },
      android: {
        elevation: 10,
      },
    }),
  },

  // Title
  title: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
    color: "#111827",
  },

  // Description text
  text: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 20,
  },

  // Button styling
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    textAlign: "center",
  },
});
