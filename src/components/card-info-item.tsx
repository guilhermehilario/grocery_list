import { Text, View } from "react-native";

import { styles } from "@/src/styles";

export default function CardInfo({
  itensList,
  concluedItem,
  price,
}: {
  itensList: number;
  concluedItem: number;
  price: string;
}) {
  return (
    <View style={styles.panel}>
      <View style={styles.panelItem}>
        <View>
          <Text style={styles.panelTitle}>Número de itens</Text>
        </View>
        <View>
          <Text style={styles.panelValue}>{itensList}</Text>
        </View>
      </View>
      <View style={styles.panelItemBar}>
        <View>
          <Text style={styles.panelTitle}>Concuídos</Text>
        </View>
        <View>
          <Text style={styles.panelValue}>{concluedItem}</Text>
        </View>
      </View>
      <View style={styles.panelItemBar}>
        <View>
          <Text style={styles.panelTitle}>Valor Total</Text>
        </View>
        <View>
          <Text style={styles.panelValue}>{price}</Text>
        </View>
      </View>
    </View>
  );
}
