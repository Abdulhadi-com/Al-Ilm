import { View, Text, StyleSheet } from "react-native";

export default function GreetingCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>🕌 Assalamu Alaikum</Text>
      <Text style={styles.name}>Abdul Hadi 👋</Text>

      <Text style={styles.date}>
        Friday • 24 July 2026
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },

  greeting: {
    fontSize: 18,
    color: "#0B6E4F",
    fontWeight: "600",
  },

  name: {
    marginTop: 6,
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
  },

  date: {
    marginTop: 6,
    fontSize: 15,
    color: "#6B7280",
  },
});