import { View, Text, StyleSheet } from "react-native";

type Props = {
  english: string;
  arabic: string;
  verses: number;
};

export default function SurahHeader({
  english,
  arabic,
  verses,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.arabic}>{arabic}</Text>

      <Text style={styles.english}>{english}</Text>

      <Text style={styles.info}>
        {verses} Ayahs
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0B6E4F",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 20,
  },

  arabic: {
    fontSize: 34,
    color: "#FFFFFF",
    marginBottom: 10,
  },

  english: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  info: {
    marginTop: 8,
    color: "#D1FAE5",
    fontSize: 16,
  },
});