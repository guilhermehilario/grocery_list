import { Feather, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 6,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  infoColumn: {
    flex: 2,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  brandName: {
    fontSize: 13,
    color: "#6c757d",
    marginTop: 2,
  },

  qtyBadge: {
    backgroundColor: "#f0f0f5",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 10,
  },
  qtyText: {
    fontSize: 14,
    color: "#5e35b1", // Roxo combinando com os botões
    fontWeight: "700",
  },

  priceContainer: {
    flex: 1.2,
    alignItems: "flex-end",
  },
  priceText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#5e35b1", // Roxo para dar destaque financeiro
  },
  // Ícone lateral (as três linhas "=" que aparecem na sua imagem)
  dragIcon: {
    marginLeft: 10,
    color: "#ccc",
    fontSize: 18,
  },
});

export function ListItens({
  title,
  mark,
  amount,
  price,
  status,
}: {
  title: string;
  mark: string;
  amount: number;
  price: number | string;
  status: string;
}) {
  return (
    <View style={styles.itemCard}>
      <View style={styles.qtyBadge}>
        <Text style={styles.qtyText}>{amount}</Text>
      </View>

      <View style={styles.infoColumn}>
        <Text style={styles.productName}>{title}</Text>
        <Text style={styles.brandName}>{mark}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{price}</Text>
      </View>

      <View style={styles.dragIcon}>
        {status === "completed" ? (
          <Feather name="check-circle" size={20} color="#4cd964" />
        ) : (
          <MaterialIcons name="radio-button-unchecked" size={20} color="red" />
        )}
      </View>
    </View>
  );
}
