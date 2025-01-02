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
    genreName: "",
    movie_id: "",
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
      "https://aj-ca-1-nycs.vercel.app/api/actor",
      form,
      {
        headers: {
          Authorization: `Bearer ${session}`,
        },
      },
      (data: IResponseType) => {
        router.push(`/genres/${data._id}`);
      }
    );
    console.log(data);
  };

  if (loading === true) return <Text>Loading API...</Text>;

  return (
    <>
      <Text>Genre</Text>
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={form.genreName}
        onChange={handleChange}
        id="genreName"
      />

      <Text>Movie</Text>
      <TextInput
        style={styles.input}
        placeholder="Movie"
        value={form.movie_id}
        onChange={handleChange}
        id="movie_id"
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
