import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar, Text, View } from "react-native";
// 1. Importamos la función que creamos en la carpeta auth
import { getStyles } from "../app/auth/LoginStyles";
// 2. Importamos el componente real que conecta con Google
import { GoogleButton } from "../components/GoogleButton";

export default function LoginEstudiante() {
  // 3. Definimos "styles" llamando a la función.
  // Como esta pantalla es fija para estudiante, le pasamos 'false'.
  const styles = getStyles(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E89B2A" />

      {/* Cabecera Naranja */}
      <View style={styles.header}>
        <View style={styles.roleIcon}>
          <MaterialCommunityIcons
            name="school-outline"
            size={50}
            color="#E89B2A"
          />
        </View>
        <Text style={styles.headerTitle}>Estudiante</Text>
        <Text style={styles.headerSubtitle}>
          Acompañamiento en tu camino a casa
        </Text>
      </View>

      {/* Contenido inferior (Blanco) */}
      <View style={styles.body}>
        <Text style={styles.heading}>Entra con tu cuenta</Text>
        <Text style={styles.description}>
          Crea tu cuenta o inicia sesión con Google.
        </Text>

        {/* 4. REEMPLAZAMOS EL BOTÓN VISUAL POR EL COMPONENTE REAL */}
        <GoogleButton rol="estudiante" />

        {/* Separador */}
        <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.separatorText}>Es rápido y seguro</Text>
          <View style={styles.line} />
        </View>

        {/* Alerta de privacidad */}
        <View style={styles.privacyNotice}>
          <MaterialCommunityIcons
            name="alert-outline"
            size={24}
            color="#D98700"
            style={styles.warningIcon}
          />
          <Text style={styles.privacyText}>
            Tus datos solo los verán los seguidores que tú autorices.
          </Text>
        </View>
      </View>
    </View>
  );
}
