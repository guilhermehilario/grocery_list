import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Container } from "./ui/container";
// import { styles } from "@/src/styles";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 16,
  },
  background: {
    flexDirection: "row",
    backgroundColor: "#5e35b1",
    borderRadius: 50,
    padding: 4,
    width: "100%",
    height: 60,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
  },
  activeButton: {
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "sans-serif",
  },
  activeText: {
    color: "#5e35b1",
  },
  inactiveText: {
    color: "#fff",
  },
  label: {
    fontSize: 14,
    color: "#888",
    marginBottom: 6,
    fontWeight: "500",
    marginLeft: 4,
  },
});

export default function CheckInputButton({
  label,
  status,
  onChangeStatus,
}: {
  label: string;
  status: "pending" | "completed";
  onChangeStatus?: (status: "pending" | "completed") => void;
}) {
  const [active, setActive] = useState(status);

  return (
    <Container
      justifyContent="center"
      alignItems="center"
      style={styles.container}
    >
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.background}>
          <TouchableOpacity
            style={[styles.button, active === "pending" && styles.activeButton]}
            onPress={() => setActive("pending")}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.text,
                active === "pending" ? styles.activeText : styles.inactiveText,
              ]}
            >
              Pendente
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              active === "completed" && styles.activeButton,
            ]}
            onPress={() => setActive("completed")}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.text,
                active === "completed"
                  ? styles.activeText
                  : styles.inactiveText,
              ]}
            >
              Concluida
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
