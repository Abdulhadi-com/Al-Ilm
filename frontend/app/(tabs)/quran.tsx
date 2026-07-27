import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import SearchBar from "../../components/quran/SearchBar";
import SurahCard from "../../components/quran/SurahCard";
import { surahs } from "../../data/surahs";
import { getAllSurahs } from "../../services/quranService";

export default function QuranScreen() {
  const [search, setSearch] = useState("");
  const [surahList, setSurahList] = useState<any[]>([]);

  useEffect(() => {
    loadSurahs();
  }, []);

  async function loadSurahs() {
    try {
      const data = await getAllSurahs();

      console.log("API DATA:", data);

      setSurahList(data);
    } catch (error) {
      console.log("API ERROR:", error);
    }
  }

 const filteredSurahs = surahList.filter((surah) =>
  surah.englishName
    .toLowerCase()
    .includes(search.toLowerCase())
);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>📖 Quran</Text>

        <Text style={styles.subtitle}>
          Read, Search and Listen to the Holy Quran
        </Text>

        <SearchBar
          value={search}
          onChangeText={setSearch}
        />

{filteredSurahs.map((surah) => (
  <SurahCard
    key={surah.number}
    number={surah.number}
    english={surah.englishName}
    arabic={surah.name}
    verses={surah.numberOfAyahs}
  />
))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#0B6E4F",
    marginTop: 20,
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 10,
  },
});