import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

import { fontsSizes } from "../theme";

const movieCardStyles = StyleSheet.create({
  movieCard: {
    backgroundColor: Colors.grey800,
    padding: 10,
    margin: 4,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    borderRadius: 10
  },
  movieTitle: {
    color: Colors.white,
    fontFamily: "Roboto_500Medium",
    fontSize: fontsSizes.FONT_SIZE_TITLE,
    marginTop: 5,
    marginBottom: 5,
  },
  movieSubtitle: {
    color: Colors.white,
    fontFamily: "Roboto_400Regular",
    fontSize: fontsSizes.FONT_SIZE_SMALL,
    marginTop: 5,
    marginBottom: 5,
  },
  movieImage: {
    height: 200,
  },
  movieVote: {
    flex: 0.5,
    textAlign: "center",
    justifyContent: "flex-start",
    color: Colors.white,
    fontFamily: "Roboto_500Medium",
    fontSize: fontsSizes.FONT_SIZE_LARGE,
    width: 50,
    borderRadius: 50,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  movieDescription: {
    color: Colors.white,
    fontSize: fontsSizes.FONT_SIZE_SMALL,
    fontFamily: "Roboto_400Regular",
    lineHeight: 24,
  },
});

export default movieCardStyles;
