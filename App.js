import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import StackNavigator from './navigation/stackNavigator/StackNavigator';
import { Provider } from 'react-redux';
import store from './app/store';

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.app}>
          <StackNavigator />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
    backgroundColor: '#111'
  }
})
