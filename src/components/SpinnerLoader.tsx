import React from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import stylesSpinner from "../styles/components/spinner";
import styles from "../styles/global";

export function SpinnerLoader() {
  return (
    <View style={[styles.container, stylesSpinner.containerLoading]}>
      <ActivityIndicator animating={true} color={Colors.red500} size={100} />
      <Text style={stylesSpinner.textLoader}>Loading...</Text>
    </View>
  );
}
