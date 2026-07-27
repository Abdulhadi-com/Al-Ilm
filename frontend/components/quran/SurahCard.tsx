import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = {
  number: number;
  english: string;
  arabic: string;
  verses: number;
};

export default function SurahCard({
  number,
  english,
  arabic,
  verses,
}: Props) {
  return (
    <Pressable
  style={styles.card}
 onPress={() => router.push({
  pathname: "/surah/[id]",
  params: { id: String(number) },
})}
>
      <View style={styles.left}>
        <View style={styles.numberCircle}>
          <Text style={styles.number}>{number}</Text>
        </View>

        <View>
          <Text style={styles.english}>{english}</Text>
          <Text style={styles.verses}>{verses} Verses</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.arabic}>{arabic}</Text>

        <Ionicons
          name="chevron-forward"
          size={20}
          color="#9CA3AF"
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  numberCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#0B6E4F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  number: {
    color: "#fff",
    fontWeight: "bold",
  },

  english: {
    fontSize: 17,
    fontWeight: "700",
  },

  verses: {
    color: "#6B7280",
    marginTop: 4,
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  arabic: {
    fontSize: 22,
    color: "#0B6E4F",
  },
});