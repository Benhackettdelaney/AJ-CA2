import { Stack } from "expo-router/stack";
import { SessionProvider } from "@/context/AuthContext";

export default function Layout() {
  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SessionProvider>
  );
}
