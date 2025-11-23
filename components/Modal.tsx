import React from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  Modal as RNModal,
  StyleSheet,
} from "react-native";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function Modal({ visible, onClose }: ModalProps) {
  const isWeb = Platform.OS === "web";

  if (!visible) return null;

  //  WEB VERSION
  if (isWeb) {
    return (
      <View style={styles.webOverlay} pointerEvents="auto">
        <View style={styles.webContainer}>
          <Text style={styles.text}>Hello from Modal 👋</Text>

          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  //  MOBILE VERSION
  return (
    <RNModal visible={visible} transparent animationType="slide">
      <View style={styles.mobileOverlay} pointerEvents="auto">
        <View style={styles.mobileContainer}>
          <Text style={styles.text}>Hello from Modal 👋</Text>

          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  //  WEB OVERLAY
  webOverlay: {
    position: "fixed" as any,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  webContainer: {
    width: 400,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
  },

  //  MOBILE
  mobileOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },

  mobileContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
  },

  text: {
    fontSize: 18,
    marginBottom: 16,
  },

  button: {
    backgroundColor: "#7A5AF8",
    paddingVertical: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
