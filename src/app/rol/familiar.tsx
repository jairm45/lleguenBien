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
import { styles } from "./familiarStyles";

export default function LoginFamiliar() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#169F85" />

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
              name="account-group-outline"
              size={50}
              color="#1ABC9C"
            />
          </View>

          <Text style={styles.headerTitle}>Seguidor o familiar</Text>
          <Text style={styles.headerSubtitle}>
            Sigue el recorrido de tu estudiante
          </Text>
        </View>

        <View style={styles.body}>
          <View style={styles.intro}>
            <Text style={styles.heading}>Entra con tu cuenta</Text>
            <Text style={styles.description}>
              Crea tu cuenta o inicia sesión con Google.
            </Text>
          </View>

          <GoogleButton rol="seguidor" />

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
              Solo verás recorridos de quien te vincule con un código.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
