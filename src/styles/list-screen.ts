import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  addListButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5d3fd3",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    shadowColor: "#5d3fd3",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
    gap: 4,
  },

  addListButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  body: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 20,
    width: "100%",
    marginVertical: 16,
  },

  buttonSave: {
    backgroundColor: "#5e35b1",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  center: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },

  //Refatorando em component
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 20,
  },
  //Fim

  filterButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    shadowColor: "#5d3fd3",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
    gap: 4,
  },

  filterButtonActive: {
    backgroundColor: "#a351f0ff",
  },

  filterButtonInactive: {
    backgroundColor: "#5d3fd3",
  },

  gradientButton: {
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  headerActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  headerFont: {
    fontSize: 15,
    fontWeight: "bold",
  },

  headerSession: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    gap: 46,
  },

  headerTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5d3fd3",
  },

  inputGroup: {
    marginBottom: 18,
  },

  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
  },

  label: {
    fontSize: 14,
    color: "#888",
    marginBottom: 6,
    fontWeight: "500",
    marginLeft: 4,
  },

  list: {
    margin: 10,
    width: "100%",
  },

  mark: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },

  panel: {
    flexDirection: "column",
    width: "100%",
    padding: 10,
    borderRadius: 15,
    borderColor: "#eee",
    borderWidth: 2,
  },

  panelItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    width: "100%",
  },

  panelItemBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    width: "100%",
    borderTopWidth: 2,
    borderTopColor: "#eee",
  },

  panelTitle: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: 16,
    width: "100%",
  },

  panelValue: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
  },

  price: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
  },

  separator: {
    height: 5,
    width: 5,
  },

  separatorBar: {
    borderTopWidth: 2,
    borderTopColor: "#eee",
  },

  separatorButtonsFilter: {
    width: "100%",
    gap: 6,
  },

  textInput: {
    height: 55,
    paddingHorizontal: 15,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
    color: "#333",
  },

  title: {
    justifyContent: "center",
    width: "30%",
  },

  value: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: "15%",
    textAlign: "center",
  },
});
