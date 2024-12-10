import { Text } from "react-native";
import { Slot, Redirect } from "expo-router";
import { useSession } from "@/context/AuthContext";
import { IAuthContext } from "@/types";

export default function Root() {
  const { session, isLoading }: any = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/" />;
  }

  return <Slot />;
}
