import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

import { fontsSizes } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  logo: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    fontFamily: "Bangers_400Regular",
    fontSize: fontsSizes.FONT_SIZE_TITLE_LOGIN,
    textAlign: "center",
    padding: 50,
    marginBottom: 50,
  },
  icon: {
    fontSize: 150,
    textAlign: "center",
    color: Colors.red900,
  },
  label: {
    color: Colors.white,
    fontFamily: "Bangers_400Regular",
    fontSize: fontsSizes.FONT_SIZE_LARGE,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 50,
    marginTop: 10,
    borderWidth: 1,
    borderBottomColor: Colors.white,
    color: Colors.white,
    textAlign: "center",
    fontSize: fontsSizes.FONT_SIZE_LARGE,
  },
  loginButton: {
    borderWidth: 1,
    borderColor: Colors.red500,
    borderRadius: 50,
    height: 70,
    width: 300,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
  },
  textButton: {
    color: Colors.white,
    fontFamily: "Bangers_400Regular",
    fontSize: fontsSizes.FONT_SIZE_TITLE,
    marginLeft: 30,
  },
  iconButton: {
    color: Colors.white,
    marginRight: 10,
  },
  error: {
    color: Colors.red500,
  },
});

export { styles };
