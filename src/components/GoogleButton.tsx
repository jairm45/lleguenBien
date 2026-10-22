import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { router } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { supabase } from "../services/supabase";

// CONFIGURACIÓN DE GOOGLE (Tu ID real de Google)
GoogleSignin.configure({
  webClientId:
    "12505597028-od0ra5bh7tbbpe780to104t623akr9ci.apps.googleusercontent.com",
});

interface GoogleButtonProps {
  rol?: string;
}

export function GoogleButton({ rol }: GoogleButtonProps) {
  const handleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.data?.idToken || (userInfo as any).idToken;

      if (idToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: "google",
          token: idToken,
        });

        if (error) throw error;

        console.log("¡Logueado!", data.user);

        // Redirige según el rol (en minúsculas)
        if (rol === "seguidor") {
          router.replace("/familiar/inicio");
        } else {
          router.replace("/estudiante/inicio");
        }
      }
    } catch (error: any) {
      console.error(error);
      Alert.alert("Error", "No se pudo iniciar sesión con Google.");
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleLogin}
      activeOpacity={0.8}
    >
      <Text style={styles.googleG}>G</Text>
      <Text style={styles.text}>Continuar con Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderWidth: 1,
    borderColor: "#D9DDEF",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    elevation: 3,
    shadowColor: "#20234F",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 7,
  },
  googleG: { color: "#4285F4", fontWeight: "800", fontSize: 21 },
  text: { color: "#20234F", fontSize: 14, fontWeight: "600" },
});
