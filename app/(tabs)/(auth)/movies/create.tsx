import { useState } from "react";
import { Text, TextInput, StyleSheet, Button } from "react-native";
import { useSession } from "@/context/AuthContext";
import useAPI from "@/hooks/useAPI";
import { useRouter } from "expo-router";
import { IResponseType } from "@/types";

export default function Page() {
  const router = useRouter();
  const session = useSession();
  const [form, setForm] = useState({
    title: "",
    description: "",
    genre_id: "",
    actor_id: "",
    list_id: "",
    release_date: "",
  });
  const { postRequest, data, loading, error } = useAPI();

  const handleChange = (e: any) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    console.log("Clicked");

    postRequest(
      "https://aj-ca-1-nycs.vercel.app/api/movie",
      form,
      {
        headers: {
          Authorization: `Bearer ${session}`,
        },
      },
      (data: IResponseType) => {
        router.push(`/movies/${data._id}`);
      }
    );
    console.log(data);
  };

  if (loading === true) return <Text>Loading API...</Text>;

  return (
    <>
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        id="title"
      />

      <Text>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        id="description"
      />

      <Text>Genre</Text>
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={form.genre_id}
        onChange={handleChange}
        id="genre_id"
      />

      <Text>Actor</Text>
      <TextInput
        style={styles.input}
        placeholder="Actor"
        value={form.actor_id}
        onChange={handleChange}
        id="actor_id"
      />

      <Text>List</Text>
      <TextInput
        style={styles.input}
        placeholder="List"
        value={form.list_id}
        onChange={handleChange}
        id="list_id"
      />
      <Text>{error}</Text>

      <Button onPress={handleSubmit} title="Submit" color="#841584" />
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
