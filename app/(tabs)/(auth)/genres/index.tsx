import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import GenreItem from "@/components/GenreItem";

import { GenreType } from "@/types";

import { Link } from "expo-router";

export default function Tab() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get("https://aj-ca-1-nycs.vercel.app/api/genre")
      .then((response) => {
        console.log(response.data);
        setGenres(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (genres.length === 0) return <Text>No Genres found</Text>;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={genres}
          renderItem={({ item }) => <GenreItem genre={item} />}
          keyExtractor={(genre: GenreType) => genre._id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
