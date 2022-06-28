import AppIcon from '@assets/login/AppIcon.png';
import { useNavigation } from '@react-navigation/native';
import { loginStyles } from '@styles/screens';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function LoginScreen(): JSX.Element {
  const { navigate } = useNavigation();

  const handleLogin = (): void => {
    navigate('Home');
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logo}>
        <Image source={AppIcon} />
        <Text style={loginStyles.title}>Your personal movie selector app</Text>
      </View>
      <TouchableOpacity style={[loginStyles.loginButton]} onPress={handleLogin}>
        <Text style={loginStyles.textButton}>Enter</Text>
        <Icon name="arrow-right" size={40} style={loginStyles.iconButton} />
      </TouchableOpacity>
    </View>
  );
}
