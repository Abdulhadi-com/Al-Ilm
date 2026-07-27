import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function BackButton() {
  return (
    <Pressable
      style={styles.button}
      onPress={() => router.back()}
    >
      <Ionicons
        name="arrow-back"
        size={24}
        color="#0B6E4F"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});