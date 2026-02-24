import CardList from "@/src/components/card-list";
import { Container } from "@/src/components/ui/container";
import { Content } from "@/src/components/ui/content";
import { styles } from "@/src/styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { groceryListRepository } from "../../repositories/grocery-list";

const stylesList = StyleSheet.create({
  header: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    gap: 5,
  },

  headerSession: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  headerTitle: {
    fontSize: 25,
    color: "#5d3fd3",
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  title: {
    color: "#156363ff",
    fontSize: 20,
    fontWeight: "bold",
  },

  content: {
    alignItems: "center",
    width: "100%",
  },

  separator: {
    height: 15,
    width: 15,
  },
});

export default function HomeScreen() {
  const router = useRouter();
  const initialEye = "eye";

  const [isEyeOn, setEyeOn] = useState(false);

  const toggleEyeOn = () => {
    setEyeOn(!isEyeOn);
  };

  let eyeState = isEyeOn ? "eye" : "eye-invisible";

  return (
    <Container style={{ width: "100%" }}>
      <View style={stylesList.header}>
        <View style={styles.headerSession}>
          <AntDesign name="shopping-cart" size={28} color="#5d3fd3" />
          <Text style={styles.headerTitleText}>Listas de Compra</Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.addListButton}>
            <AntDesign name="plus" size={24} color="white" />
            <Text style={styles.addListButtonText}>Nova Lista</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleEyeOn}>
            <AntDesign name={eyeState} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <Content flexDirection="column" style={stylesList.content}>
        <FlatList
          style={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
          data={groceryListRepository.getAll()}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                router.navigate(`/list-screen/${item.id}`);
              }}
            >
              <CardList
                key={item.id}
                title={item.title}
                amount={item.itens}
                price={item.value}
                data={item.data}
              />
            </TouchableOpacity>
          )}
        />
      </Content>
    </Container>
  );
}
