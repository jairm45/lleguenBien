import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1E3C",
  },
  decorativeCircleTop: {
    position: "absolute",
    top: -100,
    right: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  decorativeCircleSmall: {
    position: "absolute",
    top: 50,
    right: 50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F5A623",
    opacity: 0.8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    marginTop: 40,
  },
  logoContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F5A623",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#A0A5C0",
    marginBottom: 40,
  },
  questionText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 16,
    fontWeight: "500",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1E3C",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    lineHeight: 16,
  },
  footerText: {
    fontSize: 11,
    color: "#6B7280",
    textAlign: "center",
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
});
