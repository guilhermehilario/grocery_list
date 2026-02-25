import { styles } from "@/src/styles";
import { Text } from "@react-navigation/elements";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { Container } from "./ui/container";

const styleFilter = StyleSheet.create({
  filterButton: {
    gap: 6,
  },

  scrollContainer: {
    paddingHorizontal: 30,
    alignItems: "center",
    gap: 8,
  },
});

export function FilterButtonGroup() {
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
          <Text
            style={styles.buttonText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Todos (52)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            styles.filterButtonInactive,
            { width: "auto" },
          ]}
        >
          <Text
            style={styles.buttonText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Pendentes (37)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            styles.filterButtonInactive,
            { width: "auto" },
          ]}
        >
          <Text
            style={styles.buttonText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Concluídos (15)
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}
