import { Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";
import axios from "axios";
import { useSession } from "@/context/AuthContext";
import { IAuthContext } from "@/types";
import React from "react";
import { Redirect } from "expo-router";
import { useRouter } from "expo-router"; 

export default function LoginForm() {

  const router = useRouter()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { signIn } = useSession();

  const handleChange = (e: any) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handlePress = () => {
    console.log("Clicked");

    axios
      .post("http://localhost:5000/api/user/login", {
        // post("http://aj-ca-1-nycs.vercel.app/api/user/login", {
        email: form.email,
        password: form.password,
      })
      .then((response) => {
        console.log(response.data.token);
        signIn(response.data.token);
        console.log("IN REDIRECT")
      return router.navigate("/(tabs)/")
      })
      .catch((e) => {
        console.log(e);
        setError(e.response.data.message);
      });
  };

  return (
    //form
    <>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        id="email"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        id="password"
      />

      <Text>{error}</Text>

      <Button onPress={handlePress} title="Submit" color="green" />
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
