import { quranApi } from "./quranApi";

export async function getAllSurahs() {
  const response = await quranApi.get("/surah");
  return response.data.data;
}

export async function getSurah(number: number) {
  const response = await quranApi.get(`/surah/${number}`);
  return response.data.data;
}

export async function getSurahWithTranslation(number: number) {
  const response = await quranApi.get(
    `/surah/${number}/editions/quran-uthmani,en.asad,ur.jalandhry`
  );

  return response.data.data;
}

export async function getSurahAudio(number: number) {
  const response = await quranApi.get(
    `/surah/${number}/ar.alafasy`
  );

  console.log("AUDIO RESPONSE:");
  console.log(JSON.stringify(response.data.data, null, 2));

  return response.data.data;
}