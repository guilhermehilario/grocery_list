import { styles } from "@/src/styles";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

export default function CategorySelect({
  value,
  onChange,
  categories: initialCategories,
  placeholder,
}: {
  value?: string;
  onChange?: (c: string) => void;
  categories?: string[];
  placeholder?: string;
}) {
  const defaultCategories = [
    "Higiene",
    "Limpeza",
    "Comida",
    "Bebidas",
    "Guloseimas",
    "Padaria",
    "Outros",
  ];

  const [categories, setCategories] = useState<string[]>(
    initialCategories && initialCategories.length > 0
      ? initialCategories
      : defaultCategories,
  );
  const [open, setOpen] = useState(false);
  const [newCat, setNewCat] = useState("");

  const handleSelect = (c: string) => {
    onChange && onChange(c);
    setOpen(false);
  };

  const handleAdd = () => {
    const v = (newCat || "").trim();
    if (!v) return;
    if (!categories.includes(v)) {
      setCategories((s) => [v, ...s]);
    }
    onChange && onChange(v);
    setNewCat("");
    setOpen(false);
  };

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Categoria</Text>
      <TouchableOpacity
        style={[styles.textInput, { justifyContent: "center" }]}
        onPress={() => setOpen(true)}
      >
        <Text>{value ? value : placeholder ?? "Selecione uma categoria"}</Text>
      </TouchableOpacity>

      <Modal visible={open} animationType="slide" transparent={true}>
        <View style={localStyles.modalOverlay}>
          <View style={localStyles.modalContent}>
            <Text style={localStyles.modalTitle}>Selecione a categoria</Text>

            <FlatList
              data={categories}
              keyExtractor={(it) => it}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={localStyles.catItem}
                  onPress={() => handleSelect(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <View style={localStyles.addRow}>
              <TextInput
                style={[styles.textInput, { flex: 1 }]}
                value={newCat}
                onChangeText={setNewCat}
                placeholder="Adicionar nova categoria"
              />
              <TouchableOpacity style={localStyles.addBtn} onPress={handleAdd}>
                <Text style={{ color: "white" }}>Adicionar</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={localStyles.closeBtn}
              onPress={() => setOpen(false)}
            >
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const localStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  catItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  addRow: { flexDirection: "row", marginTop: 12, gap: 8, alignItems: "center" },
  addBtn: {
    backgroundColor: "#5d3fd3",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },
  closeBtn: { marginTop: 12, alignSelf: "center" },
});
