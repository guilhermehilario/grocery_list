import { Container } from "@/src/components/ui/container";
import { groceryListRepository } from "@/src/repositories/grocery-list";
import { styles } from "@/src/styles";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const stylesEdit = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  body: {
    paddingHorizontal: 20,
    width: "100%",
    marginVertical: 16,
  },
});

const filterItens = (arry: any, id: number) => {
  return arry.filter((item: any) => item.id === id);
};

export default function ItensScreen() {
  const { "list-id": listId, "item-id": itemId } = useLocalSearchParams<{
    "list-id": string;
    "item-id": string;
  }>();
  const listItem = groceryListRepository.getItensById(Number(listId));
  const itemFilter = filterItens(listItem, Number(itemId));

  const [title, onChangeTitle] = useState("");
  const [category, onChangeCategory] = useState("");
  const [price, onChangePrice] = useState("");
  const [amount, onChangeAmount] = useState("");
  const [mark, onChangeMark] = useState("");

  return (
    <Container flexDirection="column" style={stylesEdit.container}>
      <Text style={styles.headerTitleText}>
        {itemId === undefined || itemId === "0"
          ? "Adicione um Item"
          : "Edite esse Item"}
      </Text>

      <FlatList
        data={itemFilter}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View key={item.id} style={stylesEdit.body}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                style={styles.textInput}
                value={title}
                onChangeText={onChangeTitle}
                placeholder="Ex: Sabão"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Marca</Text>
              <TextInput
                style={styles.textInput}
                value={mark}
                onChangeText={onChangeMark}
                placeholder="Ex: Palmoliva"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Categoria</Text>
              <TextInput
                style={styles.textInput}
                value={category}
                onChangeText={onChangeCategory}
                placeholder="Ex: Limpeza"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Quantidade</Text>
              <TextInput
                style={styles.textInput}
                value={amount}
                keyboardType="numeric"
                onChangeText={onChangeAmount}
                placeholder="0"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Preço</Text>
              <TextInput
                style={styles.textInput}
                value={price}
                keyboardType="numeric"
                onChangeText={onChangePrice}
                placeholder="R$ 0,00"
              />
            </View>

            <TouchableOpacity style={styles.buttonSave}>
              <Text style={styles.buttonText}>Salvar Item</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </Container>
  );
}
