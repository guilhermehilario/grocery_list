import CategorySelect from "@/src/components/category-select";
import QuantityInput from "@/src/components/quantity-input";
import { Container } from "@/src/components/ui/container";
import { groceryListRepository } from "@/src/repositories/grocery-list";
import { styles } from "@/src/styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Button from "@/src/components/button";
import { Input } from "@/src/components/input";
import { saveItem } from "@/src/services/item-service";
import toUpperCaseFirstLetter from "@/src/services/toUpperCaseFirstLetter";
import {
  formatNumberToCurrency,
  maskCurrencyFromDigits,
} from "@/src/utils/currency";

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
  return arry ? arry.filter((item: any) => item.id === id) : [];
};

export default function ItensScreen() {
  const { "list-id": listId, "item-id": itemId } = useLocalSearchParams<{
    "list-id": string;
    "item-id": string;
  }>();
  const listItem = groceryListRepository.getItensById(Number(listId));
  const itemFilter = filterItens(listItem, Number(itemId));

  const selectedItem =
    itemFilter && itemFilter.length > 0 ? itemFilter[0] : undefined;

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
      price: price,
      amount: parseInt(String(amount)) || 0,
      mark: mark,
      status: isCheck ? "completed" : "pending",
    };

    saveItem(Number(listId), Number(itemId) || undefined, itemPayload);

    // voltar para a tela da lista
    router.push(`/list-screen/${listId}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        keyboardShouldPersistTaps="always"
      >
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
                {checkState}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ paddingBottom: 20 }}>
              <View style={stylesEdit.body}>
                <Input
                  label="Nome"
                  value={toUpperCaseFirstLetter(title)}
                  onChangeText={onChangeTitle}
                  placeholder="Ex: Sabão"
                />
                <Input
                  label="Marca"
                  value={toUpperCaseFirstLetter(mark)}
                  onChangeText={onChangeMark}
                  placeholder="Ex: Palmoliva"
                />

                <CategorySelect
                  value={category}
                  onChange={onChangeCategory}
                  placeholder="Ex: Limpeza"
                />
                <QuantityInput
                  label="Quantidade"
                  value={amount}
                  onChange={onChangeAmount}
                />
                <Input
                  label="Preço"
                  value={price}
                  keyboardType="numeric"
                  onChangeText={handlePriceChange}
                  placeholder="R$ 0,00"
                />
                <Button
                  buttonText="Salvar Item"
                  onPress={handleSave}
                  style={styles.buttonSave}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
