import { styles } from "@/src/styles";
import { Text } from "@react-navigation/elements";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Container } from "./ui/container";

const styleFilter = StyleSheet.create({
  filterButton: {
    width: "100%",
    gap: 6,
  },
});

export function FilterButtonGroup() {
  return (
    <Container
      flexDirection="column"
      justifyContent="space-between"
      marginVertical={20}
      style={styleFilter.filterButton}
    >
      <TouchableOpacity
        style={[styles.filterButton, styles.filterButtonActive]}
      >
        <Text style={styles.buttonText}>Todos (52)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.filterButton, styles.filterButtonInactive]}
      >
        <Text style={styles.buttonText}>Pendentes (37)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.filterButton, styles.filterButtonInactive]}
      >
        <Text style={styles.buttonText}>Concluídos (15)</Text>
      </TouchableOpacity>
    </Container>
  );
}
