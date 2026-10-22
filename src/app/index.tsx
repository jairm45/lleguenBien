import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../app/styles/WelcomeStyles";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1E3C" />

      {/* Elementos decorativos de fondo */}
      <View style={styles.decorativeCircleTop} />
      <View style={styles.decorativeCircleSmall} />

      <View style={styles.content}>
        {/* Logo de la app */}
        <View style={styles.logoContainer}>
          <Ionicons name="location-outline" size={40} color="#1A1E3C" />
        </View>

        {/* Títulos */}
        <Text style={styles.title}>LleguéBien</Text>
        <Text style={styles.subtitle}>
          Tu regreso a casa, siempre acompañado.
        </Text>

        <Text style={styles.questionText}>¿Cómo vas a usar la app?</Text>

        {/* Tarjeta: Estudiante -> Redirige al Login de la carpeta rol */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/rol/estudiante")}
        >
          <View style={[styles.iconCircle, { backgroundColor: "#F5A623" }]}>
            <MaterialCommunityIcons
              name="school-outline"
              size={28}
              color="#1A1E3C"
            />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Soy estudiante</Text>
            <Text style={styles.cardSubtitle}>
              Quiero que me acompañen al volver a casa.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#1A1E3C" />
        </TouchableOpacity>

        {/* Tarjeta: Familiar -> Redirige al Login de la carpeta rol */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/rol/familiar")}
        >
          <View style={[styles.iconCircle, { backgroundColor: "#00BFA5" }]}>
            <Ionicons name="people-outline" size={28} color="#FFFFFF" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Soy familiar o seguidor</Text>
            <Text style={styles.cardSubtitle}>
              Quiero acompañar el recorrido de un estudiante.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#1A1E3C" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Al continuar aceptas los términos y la política de privacidad.
      </Text>
    </SafeAreaView>
  );
}
