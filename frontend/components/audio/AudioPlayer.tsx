import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Audio } from "expo-av";

type Props = {
  url: string;
};

export default function AudioPlayer({ url }: Props) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [playing, setPlaying] = useState(false);

  async function playAudio() {
    try {
      if (playing && sound) {
        await sound.pauseAsync();
        setPlaying(false);
        return;
      }

      if (sound) {
        await sound.playAsync();
        setPlaying(true);
        return;
      }

      const { sound: newSound } = await Audio.Sound.createAsync({
        uri: url,
      });

      setSound(newSound);

      await newSound.playAsync();

      setPlaying(true);

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded) return;

        if (status.didJustFinish) {
          setPlaying(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={playAudio}>
        <Text style={styles.text}>
          {playing ? "⏸ Pause Audio" : "▶ Play Audio"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
  },

  button: {
    backgroundColor: "#0B6E4F",
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 12,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});