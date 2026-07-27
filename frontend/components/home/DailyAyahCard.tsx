import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DailyAyahCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="book" size={22} color="#D4AF37" />
        <Text style={styles.heading}>Daily Ayah</Text>
      </View>

      <Text style={styles.arabic}>
        وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ
      </Text>

      <Text style={styles.translation}>
        "Seek help through patience and prayer. Indeed, Allah is with the patient."
      </Text>

      <Text style={styles.reference}>
        Surah Al-Baqarah • 2:153
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Read Tafsir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    elevation: 4,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
    color: "#0B6E4F",
  },

  arabic: {
    fontSize: 24,
    textAlign: "right",
    color: "#222",
    lineHeight: 42,
    marginBottom: 15,
  },

  translation: {
    fontSize: 16,
    color: "#555",
    lineHeight: 26,
  },

  reference: {
    marginTop: 15,
    color: "#0B6E4F",
    fontWeight: "bold",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#D4AF37",
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});