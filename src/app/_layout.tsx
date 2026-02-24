import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { Colors } from "../constants/theme";
import { useColorScheme } from "../hooks/use-color-scheme.web";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: "100%",
    width: "100%",
    padding: 15,
  },
});

export default function ScreenLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: styles.container,
          headerTitle: "home",
          headerStyle: {
            backgroundColor: `${Colors[colorScheme ?? "light"].primary500}`,
          },
        }}
      />
      {/* <FloatingButtom /> */}
    </>
  );
}
