import { View, Image, Text, StyleSheet } from "react-native";

type AvatarProps = {
  size?: number;
  name?: string;
  source?: any;
};

export default function Avatar({
  size = 60,
  name = "User",
  source,
}: AvatarProps) {
  return (
    <View style={styles.container}>
      <Image
        source={
          source || {
            uri: "https://ui-avatars.com/api/?name=" + encodeURIComponent(name),
          }
        }
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 6,
  },
  name: {
    fontSize: 14,
  },
});
