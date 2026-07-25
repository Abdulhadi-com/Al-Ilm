import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

export default function AICard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="sparkles" size={26} color="#FFFFFF" />
        <Text style={styles.title}>Ask Al-Ilm AI</Text>
      </View>

      <Text style={styles.description}>
        Ask any Islamic question and receive AI-powered guidance based on authentic sources.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ask Now</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 10,
  },

  description: {
    color: "#E8F5E9",
    fontSize: 15,
    marginTop: 15,
    lineHeight: 22,
  },

  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 20,
  },

  buttonText: {
    textAlign: "center",
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});