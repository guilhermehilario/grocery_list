import { groceryListRepository } from "@/src/repositories/grocery-list";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import CardInfo from "@/src/components/card-info-item";
import { FilterButtonGroup } from "@/src/components/filter-button-group";
import { ListItens } from "@/src/components/list-itens";
import { Container } from "@/src/components/ui/container";
import convertCurrency from "@/src/services/convertCurrency";
import toUpperCaseFirstLetter from "@/src/services/toUpperCaseFirstLetter";
import { styles } from "@/src/styles";

export default function ListScreen() {
  const { "list-id": listId } = useLocalSearchParams<{ "list-id": string }>();

  const lista = groceryListRepository.getById(Number(listId));

  const itensList = groceryListRepository.getItensById(Number(listId));
  const concluedItem =
    groceryListRepository.getCountConclued(Number(listId)) || 0;
  const sumValue = groceryListRepository.getSumValueItens(Number(listId)) || 0;
  const ammoutItens =
    groceryListRepository.getAmmountItens(Number(listId)) || 0;

  // <View style={style.center}>
  //         <Text style={style.headerFont}>Nome:</Text>
  //         <Text>{lista?.title}</Text>
  //       </View>
  //       <View style={style.center}>
  //         <Text style={style.headerFont}>Qt. Itens:</Text>
  //         <Text>{sumItems(itensList)}</Text>
  //         {/* <Text>{lista?.itens}</Text> */}
  //       </View>
  //       <View style={style.center}>
  //         <Text style={style.headerFont}>Valor total:</Text>
  //         <Text>{convertCurrency(sumValues(itensList))}</Text>
  //         {/* <Text>{convertCurrency(lista?.value)}</Text> */}
  //       </View>

  return (
    <FlatList
      data={itensList}
      ItemSeparatorComponent={() => (
        <View style={[styles.separator, { width: "100%" }]}></View>
      )}
      ListHeaderComponent={
        <View style={{ width: "100%" }}>
          <Container
            flexDirection="column"
            justifyContent="space-between"
            style={{ width: "100%" }}
          >
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleText}>
                {toUpperCaseFirstLetter(lista?.title)}
              </Text>
              <TouchableOpacity
                style={styles.addListButton}
                onPress={() => router.navigate(`/list-screen/${listId}/item/0`)}
              >
                <AntDesign name="plus" size={20} color="white" />
                <Text style={styles.buttonText}>Adicionar Item</Text>
              </TouchableOpacity>
            </View>
            {/* <CardInfoNumber
          iconCard={<FontAwesome5 name="box" size={32} color="#b7791f" />}
          titleCard={"Total de Itens"}
          amount={lista?.itens}
        />*/}
            <CardInfo
              itensList={ammoutItens}
              concluedItem={concluedItem}
              price={convertCurrency(sumValue)}
            />
          </Container>
          {/* fim da header */}

          {/* //TODO: aplicar logica do filtro */}
          <FilterButtonGroup
            itensAmount={ammoutItens}
            pendingAmount={ammoutItens - concluedItem}
            completedAmount={concluedItem}
          />
        </View>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id}
          // style={style.body}
          onPress={() => {
            router.navigate(`/list-screen/${listId}/item/${item.id}`);
          }}
        >
          <ListItens
            title={toUpperCaseFirstLetter(item.title)}
            mark={toUpperCaseFirstLetter(item.mark)}
            amount={item.amount}
            price={convertCurrency(item.price)}
            status={item.status}
          />
        </TouchableOpacity>
      )}
    />
  );
}
