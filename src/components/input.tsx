import { styles } from "@/src/styles";
import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native";

export function Input({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  style,
}: {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.inputGroup, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
}
