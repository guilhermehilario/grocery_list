import { useCurrency } from "@/src/hooks/use-convert-currency";
import useSumItems from "@/src/hooks/use-sum-items";
import useSumValues from "@/src/hooks/use-sum-values";
import { useToUperCase } from "@/src/hooks/use-to-uper-case";
import { groceryListRepository } from "@/src/repositories/grocery-list";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { FilterButtonGroup } from "@/src/components/filter-button-group";
import { ListItens } from "@/src/components/list-itens";
import { Container } from "@/src/components/ui/container";
import { styles } from "@/src/styles";

export default function ListScreen() {
  const { "list-id": listId } = useLocalSearchParams<{ "list-id": string }>();

  const lista = groceryListRepository.getById(Number(listId));

  const itensList = groceryListRepository.getItensById(Number(listId));

  const { convertCurrency } = useCurrency();
  const { toUperCase } = useToUperCase();
  const { sumValues } = useSumValues();
  const { sumItems } = useSumItems();

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
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      ListHeaderComponent={
        <View style={{ width: "100%" }}>
          <Container
            flexDirection="column"
            justifyContent="space-between"
            style={{ width: "100%" }}
          >
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleText}>
                {toUperCase(lista?.title)}
              </Text>
              <TouchableOpacity style={styles.addListButton}>
                <AntDesign name="plus" size={20} color="white" />
                <Text style={styles.buttonText}>Adicionar Item</Text>
              </TouchableOpacity>
            </View>
            {/* <CardInfoNumber
          iconCard={<FontAwesome5 name="box" size={32} color="#b7791f" />}
          titleCard={"Total de Itens"}
          amount={lista?.itens}
        />
        <CardInfoNumber
          iconCard={
            <FontAwesome name="check-square" size={32} color="#4cd964" />
          }
          titleCard={"Conculídos"}
          amount={0}
        />
        <CardInfoNumber
          iconCard={
            <FontAwesome6 name="money-bill-1-wave" size={28} color="#4cd964" />
          }
          titleCard={"Conculídos"}
          amount={convertCurrency(lista?.value)}
        /> */}
            <View style={styles.panel}>
              <View style={styles.panelItem}>
                <View>
                  <Text style={styles.panelTitle}>Número de itens</Text>
                </View>
                <View>
                  <Text style={styles.panelValue}>{lista?.itens}</Text>
                </View>
              </View>
              <View style={styles.panelItemBar}>
                <View>
                  <Text style={styles.panelTitle}>Concuídos</Text>
                </View>
                <View>
                  <Text style={styles.panelValue}>{1}</Text>
                </View>
              </View>
              <View style={styles.panelItemBar}>
                <View>
                  <Text style={styles.panelTitle}>Valor Total</Text>
                </View>
                <View>
                  <Text style={styles.panelValue}>
                    {convertCurrency(lista?.value)}
                  </Text>
                </View>
              </View>
            </View>
          </Container>
          {/* fim da header */}

          <FilterButtonGroup />
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
            title={toUperCase(item.title)}
            mark={toUperCase(item.mark)}
            amount={item.amount}
            price={convertCurrency(item.price)}
            status={item.status}
          />
        </TouchableOpacity>
      )}
    />
  );
}
