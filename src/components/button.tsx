import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "../styles";

export default function Button({
  buttonText,
  style,
  onPress,
}: {
  buttonText: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
