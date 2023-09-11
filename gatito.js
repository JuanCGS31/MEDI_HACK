import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import Description from './description';

export default function NewPage({ navigation }) {
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
      return 'Down';
    } else if (sliderValue < 66) {
      return 'Neutral';
    } else {
      return 'Superb';
    }
  };

  return (
    <ImageBackground
      source={require('./assets/Background.png')} // Replace with the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {/* Add a button to go back to the previous screen (App.js) */}
          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>How are you feeling?</Text>

          {/* Add the Slider component */}
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={sliderValue}
            onValueChange={(newValue) => setSliderValue(newValue)}
          />

          {/* Display text based on sliderValue */}
          <Text style={styles.sliderText}>{getTextForSliderValue()}</Text>
        </View>

        {/* Display image based on sliderValue */}
        <View style={styles.imageContainer}>
          <Image
            source={getImageForSliderValue()}
            style={styles.bottomImage}
          />
          <Text style={styles.imageText}>Mr.Gato</Text>
        </View>

        {/* Add a button to navigate to the "Description" page */}
        <Button
          title="More"
          onPress={() => navigation.navigate('Description')}
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
  buttonContainer: {
    alignSelf: 'flex-start',
    marginTop: 20, // Increase the marginTop value to bring the button down
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'purple',
  },
  slider: {
    width: 200,
    marginTop: 20,
  },
  sliderText: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
  },
  imageContainer: {
    alignItems: 'center',
  },
  bottomImage: {
    width: 400, // Adjust the width as needed for the images
    height: 400, // Adjust the height as needed for the images
    marginBottom: 10, // Adjust the margin as needed
  },
  imageText: {
    fontSize: 40, // Adjust the font size to make it bigger
    color: 'purple',
    marginTop: -20, // Move it slightly up
    fontWeight: 'bold', // Make the text bold
  },
});
