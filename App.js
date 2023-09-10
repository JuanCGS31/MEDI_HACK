import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  // Define a state variable called sliderValue with an initial value of 0.
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={styles.container}>
      {/* Create an ImageBackground component */}
      <ImageBackground
        source={require('./assets/Background.png')} // Set the background image source
        style={styles.background} // Apply styles to the ImageBackground
      >
        {/* Create a container for content within the ImageBackground */}
        <View style={styles.content}>
          {/* Display a text element with the text "Hello" */}
          <Text style={styles.text}>Hello</Text>
          
          {/* Create a Slider component */}
          <Slider
            style={styles.slider} // Apply styles to the Slider
            minimumValue={0} // Set the minimum value of the Slider
            maximumValue={100} // Set the maximum value of the Slider
            value={sliderValue} // Set the current value of the Slider
            onValueChange={(newValue) => setSliderValue(newValue)} // Handle Slider value changes
          />
          
          {/* Display the current value of the Slider */}
          <Text style={styles.sliderValue}>Value: {sliderValue.toFixed(2)}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the full screen
  },
  background: {
    flex: 1, // Make the background image take up the full screen
    resizeMode: 'contain', // Maintain aspect ratio and fit within the container
  },
  content: {
    flex: 1, // Center content within the ImageBackground
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  text: {
    fontSize: 36, // Set the font size of the text
    color: 'purple', // Set the text color to purple
  },
  slider: {
    width: 200, // Set the width of the Slider component
    marginTop: 20, // Add margin spacing at the top
  },
  sliderValue: {
    fontSize: 24, // Set the font size of the Slider value text
    marginTop: 10, // Add margin spacing at the top
  },
});