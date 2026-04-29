import { View, Image, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../design-system/tokens";

// Props for flexible avatar usage
type AvatarProps = {
  size?: number;
  name?: string;
  source?: any;
  showName?: boolean;
};

export default function Avatar({
  size = 60,
  name = "User",
  source,
  showName = true,
}: AvatarProps) {
  return (
    <View style={styles.container}>
      {/* Avatar Image */}
      <Image
        source={
          source || {
            uri: "https://ui-avatars.com/api/?name=" + encodeURIComponent(name),
          }
        }
        style={[
          styles.image,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      />

      {/* Optional Name Label */}
      {showName && <Text style={styles.name}>{name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  // Wrapper container
  container: {
    alignItems: "center",
    gap: spacing.xs,
  },

  // Avatar image styling
  image: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  // Name text
  name: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
  },
});
