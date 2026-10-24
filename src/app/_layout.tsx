import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

// Esto le dice a Expo Router que la pantalla inicial es "index"
export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Declara la pantalla de inicio explícitamente */}
      <Stack.Screen name="index" />
    </Stack>
  );
}
