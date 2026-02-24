import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useCurrency } from "../hooks/use-convert-currency";
import { useToUperCase } from "../hooks/use-to-uper-case";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",

    width: "100%",
    height: 160,
    padding: 16,

    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#eee",
    borderStyle: "solid",

    backgroundColor: "white",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  separatorBar: {
    width: "100%",
    height: 2,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#eee",
    marginTop: 5,
  },

  line: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  info: {
    flexDirection: "row",
    gap: 15,
  },

  botom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#eee",
    paddingTop: 8,
  },

  itemTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginVertical: 10,
  },

  itemPrice: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "35%",
    gap: 5,
  },

  dateText: {
    fontSize: 15,
    color: "#888",
  },
});

export default function CardList({ title, price, amount, data }) {
  const { convertCurrency } = useCurrency();
  const { toUperCase } = useToUperCase();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.itemTitle}>{toUperCase(title)}</Text>
        <TouchableOpacity>
          <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <View style={styles.line}>
          <FontAwesome5 name="box" size={24} color="#b7791f" />
          <Text>{amount} itens</Text>
        </View>
        <View style={styles.line}>
          <Ionicons name="checkmark-circle" size={32} color="#4cd964" />
          <Text>{amount} concluídos</Text>
        </View>
      </View>
      {/* <View style={styles.separatorBar} /> */}
      <View style={styles.botom}>
        <Text style={styles.dateText}>{data}</Text>
        <View style={styles.itemPrice}>
          <Text>{convertCurrency(price)}</Text>
        </View>
      </View>
    </View>
  );
}
