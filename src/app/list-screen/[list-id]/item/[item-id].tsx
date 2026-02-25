import { Container } from "@/src/components/ui/container";
import { groceryListRepository } from "@/src/repositories/grocery-list";
import { styles } from "@/src/styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useToUperCase } from "@/src/hooks/use-to-uper-case";
import { maskCurrencyFromDigits, formatNumberToCurrency } from "@/src/utils/currency";
import { saveItem } from "@/src/services/item-service";

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
  const { toUperCase } = useToUperCase();

  const { "list-id": listId, "item-id": itemId } = useLocalSearchParams<{
    "list-id": string;
    "item-id": string;
  }>();
  const listItem = groceryListRepository.getItensById(Number(listId));
  const itemFilter = filterItens(listItem, Number(itemId));

  const selectedItem = itemFilter && itemFilter.length > 0 ? itemFilter[0] : undefined;

  const [title, onChangeTitle] = useState(selectedItem?.title ?? "");
  const [category, onChangeCategory] = useState(selectedItem?.category ?? "");
  const [price, onChangePrice] = useState(
    selectedItem?.price !== undefined
      ? formatNumberToCurrency(Number(selectedItem.price))
      : "",
  );
  const [amount, onChangeAmount] = useState(
    selectedItem?.amount !== undefined ? String(selectedItem.amount) : "",
  );
  const [mark, onChangeMark] = useState(selectedItem?.mark ?? "");

  const [isCheck, setCheck] = useState(
    selectedItem?.status === "completed" ? true : false,
  );

  const toggleCheck = () => {
    setCheck(!isCheck);
  };

  let checkState = isCheck ? (
    <Feather name="check-circle" size={24} color="#4cd964" />
  ) : (
    <MaterialIcons name="radio-button-unchecked" size={24} color="red" />
  );

  const handlePriceChange = (text: string) => {
    const masked = maskCurrencyFromDigits(text);
    onChangePrice(masked);
  };

  const handleSave = () => {
    const itemPayload: any = {
      title: title,
      category: category,
      price: price, // may be masked, service will parse
      amount: parseInt(String(amount)) || 0,
      mark: mark,
      status: isCheck ? "completed" : "pending",
    };

    saveItem(Number(listId), Number(itemId) || undefined, itemPayload);

    // voltar para a tela da lista
    router.push(`/list-screen/${listId}`);
  };

  return (
    <Container flexDirection="column" style={stylesEdit.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.headerTitleText}>
          {itemId === undefined || itemId === "0"
            ? "Adicione um Item"
            : "Edite esse Item"}
        </Text>
        <View
          style={[
            styles.inputGroup,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Text style={styles.label}>Status</Text>
          <TouchableOpacity onPress={toggleCheck}>
            {/* <Text style={styles.textInput}>{checkState}</Text> */}
            {checkState}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingBottom: 20 }}>
        <View style={stylesEdit.body}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.textInput}
              value={toUperCase(title)}
              onChangeText={onChangeTitle}
              placeholder="Ex: Sabão"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Marca</Text>
            <TextInput
              style={styles.textInput}
              value={toUperCase(mark)}
              onChangeText={onChangeMark}
              placeholder="Ex: Palmoliva"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Categoria</Text>
            <TextInput
              style={styles.textInput}
              value={toUperCase(category)}
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
              onChangeText={handlePriceChange}
              placeholder="R$ 0,00"
            />
          </View>

          <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar Item</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
