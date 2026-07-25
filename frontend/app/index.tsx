import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Ionicons
          name="moon"
          size={90}
          color="#D4AF37"
        />

        <Text style={styles.title}>Al-Ilm</Text>

        <Text style={styles.subtitle}>
          AI-Powered Islamic Learning Platform
        </Text>

        <Text style={styles.description}>
          Learn Quran, Hadith and Islam with the help of Artificial Intelligence.
        </Text>

      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.buttonText}>
          Get Started
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B6E4F",
    justifyContent: "space-between",
    paddingVertical: 60,
    paddingHorizontal: 24,
  },

  content: {
    alignItems: "center",
    marginTop: 80,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 25,
  },

  subtitle: {
    marginTop: 12,
    color: "#E8F5E9",
    fontSize: 18,
    textAlign: "center",
  },

  description: {
    marginTop: 20,
    color: "#DDEFE8",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 24,
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: "#D4AF37",
    paddingVertical: 18,
    borderRadius: 18,
  },

  buttonText: {
    textAlign: "center",
    color: "#0B6E4F",
    fontWeight: "bold",
    fontSize: 18,
  },
});