import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";
import { fontsSizes } from "../../theme";

const styles = StyleSheet.create({
  containerLoading: {
      justifyContent: "center",
      alignItems: "center",
  },
  textLoader: {
      color: Colors.red300,
      fontSize: fontsSizes.FONT_SIZE_TITLE,
      padding: 30
  }
});

export default styles;