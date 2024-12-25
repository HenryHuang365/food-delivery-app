import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="RestaurantScreen" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
