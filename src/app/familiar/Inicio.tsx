import { StyleSheet, Text, View } from "react-native";

export default function inicioFamiliar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido Familiar!</Text>
      <Text style={styles.subtitle}>
        Aquí podrás ver el recorrido de tus estudiantes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1E3C",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#73799D",
    textAlign: "center",
  },
});
