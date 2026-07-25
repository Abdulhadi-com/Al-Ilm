import { View, Text, StyleSheet } from "react-native";

export default function QuranScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📖 Quran</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});