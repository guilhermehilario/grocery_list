import { styles } from "@/src/styles";
import { Text } from "@react-navigation/elements";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { Container } from "./ui/container";

const styleFilter = StyleSheet.create({
  filterButton: {
    width: "auto",
    gap: 6,
  },

  scrollContainer: {
    paddingRight: 20,
    alignItems: "center",
    gap: 8,
  },
});

export function FilterButtonGroup({
  itensAmount,
  pendingAmount,
  completedAmount,
}: {
  itensAmount: number;
  pendingAmount: number;
  completedAmount: number;
}) {
  return (
    <Container marginVertical={20} style={styleFilter.filterButton}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styleFilter.scrollContainer}
      >
        <TouchableOpacity
          style={[
            styles.filterButton,
            styles.filterButtonActive,
            { width: "auto" },
          ]}
        >
          <Text style={styles.buttonText}>Todos ({itensAmount})</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            styles.filterButtonInactive,
            { width: "auto" },
          ]}
        >
          <Text style={styles.buttonText}>Pendentes ({pendingAmount})</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            styles.filterButtonInactive,
            { width: "auto" },
          ]}
        >
          <Text style={styles.buttonText}>Concluídos ({completedAmount})</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}
