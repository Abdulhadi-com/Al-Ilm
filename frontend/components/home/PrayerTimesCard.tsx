import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const prayers = [
  { name: "Fajr", time: "4:45 AM" },
  { name: "Dhuhr", time: "1:15 PM" },
  { name: "Asr", time: "5:10 PM" },
  { name: "Maghrib", time: "7:18 PM" },
  { name: "Isha", time: "8:45 PM" },
];

export default function PrayerTimesCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="time" size={22} color="#0B6E4F" />
        <Text style={styles.title}>Prayer Times</Text>
      </View>

      {prayers.map((prayer) => (
        <View key={prayer.name} style={styles.row}>
          <Text style={styles.name}>{prayer.name}</Text>
          <Text style={styles.time}>{prayer.time}</Text>
        </View>
      ))}
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

  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#0B6E4F",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E7EB",
  },

  name: {
    fontSize: 16,
    color: "#374151",
  },

  time: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
});