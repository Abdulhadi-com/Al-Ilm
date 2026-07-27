import { SafeAreaView } from "react-native-safe-area-context";
import AudioPlayer from "../../components/audio/AudioPlayer";
import { getSurahAudio } from "../../services/quranService";
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
import { getSurahWithTranslation } from "../../services/quranService";

export default function SurahDetailScreen() {
  const { id } = useLocalSearchParams();

  const [surah, setSurah] = useState<any>(null);
  const [audioSurah, setAudioSurah] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSurah();
  }, []);

async function loadSurah() {
  try {
    const surahData = await getSurahWithTranslation(Number(id));
    setSurah(surahData);

    const audioData = await getSurahAudio(Number(id));
    console.log("AUDIO DATA:", audioData);

    setAudioSurah(audioData);
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
  english={surah?.[0]?.englishName ?? ""}
  arabic={surah?.[0]?.name ?? ""}
  verses={surah?.[0]?.numberOfAyahs ?? 0}
/>


{surah?.[0]?.ayahs?.map((ayah: any, index: number) => (
  <View key={ayah.number} style={styles.ayahCard}>
    <Text style={styles.ayahNumber}>
      Ayah {ayah.numberInSurah}
    </Text>

    {/* Arabic */}
    <Text style={styles.arabic}>
      {surah[0].ayahs[index].text}
    </Text>

    <AudioPlayer
  url={audioSurah?.ayahs?.[index]?.audio}
/>

    {/* English */}
    <Text style={styles.english}>
      {surah[1].ayahs[index].text}
    </Text>

    {/* Urdu */}
    <Text style={styles.urdu}>
      {surah[2].ayahs[index].text}
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
  english: {
  fontSize: 17,
  color: "#374151",
  marginTop: 15,
  lineHeight: 28,
},

urdu: {
  fontSize: 20,
  color: "#065F46",
  marginTop: 15,
  textAlign: "right",
  lineHeight: 36,
},
});