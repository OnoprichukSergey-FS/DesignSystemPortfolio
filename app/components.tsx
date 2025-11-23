import { View, Text, StyleSheet } from "react-native";
import { NavBar } from "../components/NavBar";

export default function ComponentsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Components Screen</Text>
      <NavBar current="components" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 80,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
