import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "25%",
    paddingVertical: 25,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#eee",
  },

  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: "100%",
  },

  infos: {
    flexDirection: "column",
    gap: 6,
  },

  titleCard: {
    fontSize: 15,
  },

  textCard: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
});

export default function CardInfoNumber({
  iconCard,
  titleCard,
  amount,
}: {
  iconCard: React.ReactNode;
  titleCard: string;
  amount: number | string;
}) {
  return (
    <View style={styles.content}>
      <View style={styles.icon}>{iconCard}</View>
      <View style={styles.infos}>
        <Text style={styles.titleCard}>{titleCard}</Text>
        <Text style={styles.textCard}>{amount}</Text>
      </View>
    </View>
  );
}
