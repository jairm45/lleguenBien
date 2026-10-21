import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../app/styles/LoginStyles"; // Ajusta la ruta según tu estructura

export default function LoginEstudiante() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E89B2A" />

      {/* Cabecera Naranja */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <MaterialCommunityIcons
            name="school-outline"
            size={50}
            color="#1A1E3C"
          />
        </View>
        <Text style={styles.headerTitle}>Estudiante</Text>
        <Text style={styles.headerSubtitle}>
          Acompañamiento en tu camino a casa
        </Text>
      </View>

      {/* Contenido inferior (Blanco) */}
      <View style={styles.body}>
        <Text style={styles.loginTitle}>Entra con tu cuenta</Text>
        <Text style={styles.loginSubtitle}>
          Crea tu cuenta o inicia sesión con Google.
        </Text>

        {/* Botón de Google */}
        <TouchableOpacity style={styles.googleButton}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#4285F4",
              marginRight: 10,
            }}
          >
            G
          </Text>
          <Text style={styles.googleButtonText}>Continuar con Google</Text>
        </TouchableOpacity>

        {/* Separador */}
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Es rápido y seguro</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* Alerta de privacidad */}
        <View style={styles.alertBox}>
          <MaterialCommunityIcons
            name="alert-outline"
            size={24}
            color="#E89B2A"
            style={styles.alertIcon}
          />
          <Text style={styles.alertText}>
            Tus datos solo los verán los seguidores que tú autorices.
          </Text>
        </View>
      </View>
    </View>
  );
}
