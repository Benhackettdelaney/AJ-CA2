import { View, Text, StyleSheet, Button } from "react-native";
import LoginForm from "@/components/LoginForm";
import { useSession } from "@/context/AuthContext";
import { Provider as PaperProvider } from "react-native-paper";
import { Link } from "expo-router";

export default function Tab() {
  const { session, signOut } = useSession();
  console.log("session in tsbs index")
  return (
    <View style={styles.container}>
      <Text>Tab Home REDIRECTED</Text>
      <Link href="/(tabs)/(auth)/movies">Movies</Link>
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
