import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
// Importamos los estilos desde el mismo directorio
import { GoogleButton } from "../../components/GoogleButton";
import { styles } from "./estudianteStyles";

export default function LoginEstudiante() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#D98700" />

      <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
        <View style={styles.header}>
          <View style={styles.circleLeft} />
          <View style={styles.circleRight} />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <View style={styles.roleIcon}>
            <MaterialCommunityIcons
              name="school-outline"
              size={50}
              color="#F5A623"
            />
          </View>

          <Text style={styles.headerTitle}>Estudiante</Text>
          <Text style={styles.headerSubtitle}>
            Acompañamiento en tu camino a casa
          </Text>
        </View>

        <View style={styles.body}>
          <View style={styles.intro}>
            <Text style={styles.heading}>Entra con tu cuenta</Text>
            <Text style={styles.description}>
              Crea tu cuenta o inicia sesión con Google.
            </Text>
          </View>

          <GoogleButton rol="estudiante" />

          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.separatorText}>Es rápido y seguro</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.privacyNotice}>
            <MaterialCommunityIcons
              name="alert-outline"
              size={21}
              style={styles.warningIcon}
            />
            <Text style={styles.privacyText}>
              Tus datos solo los verán los seguidores que tú autorices.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
