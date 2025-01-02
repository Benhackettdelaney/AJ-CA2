import { StyleSheet } from "react-native";
import { Tabs, Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Tab() {
  console.log("session in tsbd _layout")
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          title: 'Movies',
          // tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
