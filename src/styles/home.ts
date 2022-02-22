import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

import { colors, fontsSizes } from "../theme";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.black_150,
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    maxWidth: 260,
    marginTop: 64,
  },
  header: {
    backgroundColor: Colors.red900,
  },
});

export default homeStyles;
