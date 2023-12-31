import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingComponent = ({ size, color }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size || 'large'} color={color || '#36d346'} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff68f',
  },
});

export default LoadingComponent;
