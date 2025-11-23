import { View, Text, StyleSheet } from "react-native";

interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 12,
    color: "#111827",
  },
});
