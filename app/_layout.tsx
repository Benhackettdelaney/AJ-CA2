import { Stack } from "expo-router/stack";
import { SessionProvider } from "@/context/AuthContext";
import LoginForm from "@/components/LoginForm";

export default function Layout() {

  
  return (
    <SessionProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerTitle: "Nice"}} />
      </Stack>
    </SessionProvider>
  );
}
