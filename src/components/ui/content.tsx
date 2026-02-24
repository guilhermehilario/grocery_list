import { StyleProp, View, ViewStyle } from "react-native";

export function Content({
  children,
  flexDirection,
  justifyContent,
  marginVertical,
  marginHorizontal,
  style,
}: {
  children: React.ReactNode;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  marginVertical?: number;
  marginHorizontal?: number;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        { flexDirection, justifyContent, marginVertical, marginHorizontal },
        style,
      ]}
    >
      {children}
    </View>
  );
}
