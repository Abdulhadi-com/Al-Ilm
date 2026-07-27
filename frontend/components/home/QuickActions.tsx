import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const actions = [
  { title: "Quran", icon: "book", color: "#0B6E4F" },
  { title: "AI Mufti", icon: "sparkles", color: "#2563EB" },
  { title: "Dua", icon: "moon", color: "#7C3AED" },
  { title: "Hadith", icon: "library", color: "#D97706" },
];

export default function QuickActions() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quick Actions</Text>

      <View style={styles.grid}>
        {actions.map((item) => (
          <Pressable key={item.title} style={styles.card}>
            <Ionicons
              name={item.icon as any}
              size={32}
              color={item.color}
            />

            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 25,
    alignItems: "center",
    marginBottom: 15,
    elevation: 4,
  },

  title: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },
});