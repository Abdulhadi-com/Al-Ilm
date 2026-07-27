import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={22} color="#6B7280" />

      <TextInput
        placeholder="Search Surah..."
        placeholderTextColor="#9CA3AF"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    elevation: 3,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});