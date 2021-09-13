import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <View>
      <Navbar />
      <Banner />
      {/* ROWS */}
    </View>
  );
}
