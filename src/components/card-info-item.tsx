import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },

  infos: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },

  name: {
    flexDirection: "row",
  },

  botton: {
    flexDirection: "row",
  },
});

export default function CardInfoItem({ name, category, amount, price }) {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        {/* <TouchableOpacity></TouchableOpacity> */}
        <View>
          <Text>{name}</Text>
          <Text>{category}</Text>
        </View>
      </View>
      <View style={styles.infos}></View>
      <View style={styles.botton}></View>
    </View>
  );
}
