// src/app/_layout.tsx
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Evita que el splash screen se oculte automáticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Oculta el splash screen una vez que la app está lista
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Aquí Expo Router cargará automáticamente tus pantallas */}
    </Stack>
  );
}
