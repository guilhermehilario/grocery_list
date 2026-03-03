import React from "react";
import { styles } from "@/src/styles";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function QuantityInput({
  label,
  value,
  onChange,
  min = 0,
}: {
  label?: string;
  value?: string;
  onChange?: (v: string) => void;
  min?: number;
}) {
  const n = parseInt(String(value)) || 0;

  const dec = () => {
    const next = Math.max(min, n - 1);
    onChange && onChange(String(next));
  };

  const inc = () => {
    const next = n + 1;
    onChange && onChange(String(next));
  };

  return (
    <View style={styles.inputGroup}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={dec}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#f0f0f5",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 8,
          }}
        >
          <Feather name="minus" size={20} color="#333" />
        </TouchableOpacity>

        <TextInput
          style={[styles.textInput, { flex: 1, textAlign: "center" }]}
          value={value}
          keyboardType="numeric"
          onChangeText={onChange}
          placeholder="0"
        />

        <TouchableOpacity
          onPress={inc}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#5d3fd3",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 8,
          }}
        >
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
