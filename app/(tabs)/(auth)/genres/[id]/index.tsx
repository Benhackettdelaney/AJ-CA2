import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

import { useLocalSearchParams } from "expo-router";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { GenreType } from "@/types";

export default function Tab() {
  const [genre, setGenre] = useState<GenreType | null>(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    axios
      .get(`https://aj-ca-1-nycs.vercel.app/api/genre/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImZ1bGxfbmFtZSI6Ik1heCBQb3dlciIsInJvbGUiOiJhZG1pbiIsIl9pZCI6IjY3NTFmOTExOGNhZDY4NWQ5OTE3NmIzNSIsImlhdCI6MTczMzc1Mjc2NX0.5HGqvbRYde0QR8ZxeFkkKTRrAMvcbxTT15_RxAdnCZY",
        },
      })
      .then((response) => {
        console.log(response.data);
        setGenre(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  if (!genre) return <Text>Movie not found</Text>;

  return (
    <View style={styles.container}>
      <Text>{genre.genreName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
