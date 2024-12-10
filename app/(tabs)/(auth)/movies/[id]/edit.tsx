import { useState, useEffect } from "react";
import { Text, TextInput, StyleSheet, Button } from "react-native";
import { useSession } from "@/context/AuthContext";
import axios from 'axios';

export default function Page() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    genre_id: "",
    actor_id: "",
    list_id: "",
    release_date: "",
  });

  useEffect(() => {
    axios.get(`https://aj-ca-1-nycs.vercel.app/api/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${session}`
        }
    })
         .then()
         .catch()
  }, []);

  const handleChange = (e: any) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <>
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="title"
        value={form.title}
        onChange={handleChange}
        id="title"
      />
      <Text>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="description"
        value={form.description}
        onChange={handleChange}
        id="description"
      />
      <Text>Genre</Text>
      <TextInput
        style={styles.input}
        placeholder="city"
        value={form.genre_id}
        onChange={handleChange}
        id="city"
      />
      <Text>Actor</Text>
      <TextInput
        style={styles.input}
        placeholder="start date"
        value={form.actor_id}
        onChange={handleChange}
        id="start_date"
      />
      <Text>List</Text>
      <TextInput
        style={styles.input}
        placeholder="list id "
        value={form.list_id}
        onChange={handleChange}
        id="end_date"
      />

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
