import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Slider from '@react-native-community/slider';

export default function NewPage() {
  const [sliderValue, setSliderValue] = useState(0);

  // Function to determine which image to display based on sliderValue
  const getImageForSliderValue = () => {
    if (sliderValue < 33) {
      return require('./assets/elgatoBlue.png'); // Replace with the path to your first image
    } else if (sliderValue < 66) {
      return require('./assets/elgato.png'); // Replace with the path to your second image
    } else {
      return require('./assets/elgatoGreen.png'); // Replace with the path to your third image
    }
  };

  // Function to determine the text to display based on sliderValue
  const getTextForSliderValue = () => {
    if (sliderValue < 33) {
      return 'Low Value';
    } else if (sliderValue < 66) {
      return 'Medium Value';
    } else {
      return 'High Value';
    }
  };

  return (
    <ImageBackground
      source={require('./assets/Background.png')} // Replace with the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>This is the New Page!</Text>

          {/* Add the Slider component */}
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={sliderValue}
            onValueChange={(newValue) => setSliderValue(newValue)}
          />

          {/* Display the slider value */}
          <Text style={styles.sliderValue}>Slider Value: {sliderValue.toFixed(2)}</Text>

          {/* Display text based on sliderValue */}
          <Text style={styles.sliderText}>{getTextForSliderValue()}</Text>
        </View>

        {/* Display image based on sliderValue */}
        <Image
          source={getImageForSliderValue()}
          style={styles.bottomImage}
        />
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
  },
  slider: {
    width: 200,
    marginTop: 20,
  },
  sliderValue: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
  },
  sliderText: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
  },
  bottomImage: {
    width: 400, // Adjust the width as needed for the images
    height: 400, // Adjust the height as needed for the images
    marginBottom: 20, // Adjust the margin as needed
  },
});