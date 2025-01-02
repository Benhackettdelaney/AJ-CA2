import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import MovieItem from "@/components/MovieItem";

import { MovieType } from "@/types";

import { Link } from "expo-router";

export default function Tab() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://aj-ca-1-nycs.vercel.app/api/movie")
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (movies.length === 0) return <Text>No Movies found</Text>;

  return (
    
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieItem movie={item} />}
          keyExtractor={(movie: MovieType) => movie._id}
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
