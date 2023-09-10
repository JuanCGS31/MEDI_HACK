import React from 'react';
import { View, StyleSheet, ImageBackground, Button } from 'react-native';

export default function Help({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/BackgroundHelp.png')} // Replace with the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Add a "Go Back" button in the upper-left corner */}
        <View style={styles.buttonContainer}>
          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
          />
        </View>
        {/* Remove the text */}
        {/* Add your help content here */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // You can adjust this to 'contain' or other values as needed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: 30, // Adjust the top value to bring the button down or up
    left: 10,
  },
});
