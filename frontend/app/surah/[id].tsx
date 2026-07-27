import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import BackButton from "../../components/common/BackButton";
import SurahHeader from "../../components/surah/SurahHeader";
import { getSurah } from "../../services/quranService";

export default function SurahDetailScreen() {
  const { id } = useLocalSearchParams();

  const [surah, setSurah] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSurah();
  }, []);

  async function loadSurah() {
    try {
      const data = await getSurah(Number(id));
      setSurah(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.loader}>
        <ActivityIndicator size="large" color="#0B6E4F" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />

      <ScrollView showsVerticalScrollIndicator={false}>
        <SurahHeader
          english={surah.englishName}
          arabic={surah.name}
          verses={surah.numberOfAyahs}
        />

        {surah.ayahs.map((ayah: any) => (
          <View key={ayah.number} style={styles.ayahCard}>
            <Text style={styles.ayahNumber}>
              Ayah {ayah.numberInSurah}
            </Text>

            <Text style={styles.arabic}>
              {ayah.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
    paddingTop: 60,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  ayahCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 2,
  },

  ayahNumber: {
    color: "#0B6E4F",
    fontWeight: "bold",
    marginBottom: 10,
  },

  arabic: {
    fontSize: 28,
    lineHeight: 55,
    textAlign: "right",
    color: "#111827",
  },
});