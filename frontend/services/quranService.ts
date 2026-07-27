import { quranApi } from "./quranApi";

export async function getAllSurahs() {
  const response = await quranApi.get("/surah");
  return response.data.data;
}

export async function getSurah(number: number) {
  const response = await quranApi.get(`/surah/${number}`);
  return response.data.data;
}