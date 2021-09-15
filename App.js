import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/homescreen/HomeScreen';


export default function App() {
  
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
    backgroundColor: '#111'
  }
})
