import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import loginStyles from "../styles/login";

export function LoginScreen() {
  const { navigate } = useNavigation();
  const [username, setUsername] = useState<string>();
  const [loginFail, setLoginFail] = useState<boolean>(false);

  const handleLogin = () => {
    // if (!username || username?.length <= 3) {
    //   setLoginFail(true);
    //   return;
    // }

    navigate({ name: "Home" });
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logo}>
        <Icon name="movie-open" style={loginStyles.icon} />
        <Text style={loginStyles.title}>Your personal movie selector app</Text>
      </View>
      <>
        {/* <TextInput 
          style={loginStyles.input} 
          value={username}
          onChangeText={(text) => setUsername(text)} 
        />
        {loginFail && <Text style={loginStyles.error}>Invalid Login</Text>}
        <Text style={loginStyles.label}>Enter your name</Text> */}
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
