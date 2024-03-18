import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    paddingBottom: 24,
    alignItems: "center",
    backgroundColor: "#fcebdc",
  },
  flatList: {
    width: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 4,
    textTransform: "uppercase",
    margin: 24,
    color: "#000000",
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },
  aviso: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6b533c",
    backgroundColor: "#9e613078",
    borderRadius: 7,
    elevation: 1,
    padding: 36,
  },
  busca: {
    height: 300,
    width: "100%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fcebdc",
  },
  noticias: {
    flex: 1,
    backgroundColor: "#fcebdc",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default styles;
