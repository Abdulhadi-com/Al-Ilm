import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

export default function ContinueReading() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Ionicons
          name="book-outline"
          size={28}
          color={COLORS.primary}
        />

        <Text style={styles.title}>Continue Reading</Text>
      </View>

      <Text style={styles.surah}>
        Surah Al-Baqarah
      </Text>

      <Text style={styles.ayah}>
        Ayah 18 / 286
      </Text>

      <View style={styles.progressBackground}>
        <View style={styles.progressFill} />
      </View>

      <Text style={styles.percent}>
        35% Completed
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Continue
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
    color: COLORS.primary,
  },

  surah: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },

  ayah: {
    marginTop: 5,
    color: "#666",
    fontSize: 15,
  },

  progressBackground: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginTop: 20,
  },

  progressFill: {
    width: "35%",
    height: 10,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },

  percent: {
    marginTop: 10,
    color: "#666",
  },

  button: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});