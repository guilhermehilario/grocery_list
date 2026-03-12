import { StyleProp, View, ViewStyle } from "react-native";

export function Container({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  marginVertical,
  style,
}: {
  children: React.ReactNode;
  flexDirection?: "row" | "column";
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  marginVertical?: number;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[{ flexDirection, justifyContent, marginVertical }, style]}>
      {children}
    </View>
  );
}
