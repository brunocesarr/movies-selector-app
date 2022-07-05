import { spinnerStyles } from '@styles/components';
import { globalStyles } from '@styles/global';
import React from 'react';
import { Text, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

export function SpinnerLoader() {
  return (
    <View style={[globalStyles.container, spinnerStyles.containerLoading]}>
      <ActivityIndicator animating={true} color={Colors.red500} size={100} />
      <Text style={spinnerStyles.textLoader}>Loading...</Text>
    </View>
  );
}
