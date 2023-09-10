import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Slider from '@react-native-community/slider';

export default function NewPage() {
  return (
    <ImageBackground
      source={require('./assets/Background.png')} // Replace with the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>This is the New Page!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain', // You can adjust this to 'contain' or other values as needed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
  },
});