import { View, Text, StyleSheet } from "react-native";

export default function LearnScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Learn</Text>
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