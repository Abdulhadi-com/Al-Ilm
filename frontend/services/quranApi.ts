import axios from "axios";

export const quranApi = axios.create({
  baseURL: "https://api.alquran.cloud/v1",
  timeout: 10000,
});