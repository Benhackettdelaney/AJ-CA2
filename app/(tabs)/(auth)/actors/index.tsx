import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ActorItem from "@/components/ActorItem";

import { ActorType } from "@/types";

import { Link } from "expo-router";

export default function Tab() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios
      .get("https://aj-ca-1-nycs.vercel.app/api/actor")
      .then((response) => {
        console.log(response.data);
        setActors(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (actors.length === 0) return <Text>No Actors found</Text>;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={actors}
          renderItem={({ item }) => <ActorItem actor={item} />}
          keyExtractor={(actor: ActorType) => actor._id}
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
