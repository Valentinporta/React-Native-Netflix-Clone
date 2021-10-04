import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import StackNavigator from './navigation/stackNavigator/StackNavigator';

export default function App() {
  
  return (
    <NavigationContainer>
      <View style={styles.app}>
        <StackNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
    backgroundColor: '#111'
  }
})
