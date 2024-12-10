import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ListType } from "@/types";

interface MyProps {
  list: ListType;
}

export default function ListItem({ list }: MyProps) {
  return (
    <View style={styles.item}>
      <Link
        href={{
          pathname: "/genres/[id]",
          params: { id: list._id },
        }}
      >
        <Text>{list.listName}</Text>
      </Link>
      <Text>{list.movie_id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#eaeaea",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
