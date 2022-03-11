import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import loginStyles from "../styles/login";

export function LoginScreen() {
  const { navigate } = useNavigation();

  const handleLogin = () => {
    navigate({ name: "Home" });
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logo}>
        <Icon name="movie-open" style={loginStyles.icon} />
        <Text style={loginStyles.title}>Your personal movie selector app</Text>
      </View>
      <>
        <TouchableOpacity
          style={[loginStyles.loginButton]}
          onPress={handleLogin}
        >
          <Text style={loginStyles.textButton}>Enter</Text>
          <Icon name="arrow-right" size={40} style={loginStyles.iconButton} />
        </TouchableOpacity>
      </>
    </View>
  );
}
