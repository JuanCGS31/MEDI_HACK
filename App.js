import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import Slider from '@react-native-community/slider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import NewPage from './login.js';

// Define the HomeScreen component
function HomeScreen({ navigation }) {
  const [sliderValue, setSliderValue] = useState(0);
  const [fontLoaded, setFontLoaded] = useState(false);

  // Load the custom font
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        // Use the correct font family name here
        'custom-font': require('./assets/fonts/Kitchen Restaurant.otf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  // Render the HomeScreen component
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/Background.png')}
        style={styles.background}
      >
        <View style={styles.content}>
          {/* Apply the custom font to the text with the correct font family name */}
          {fontLoaded && (
            <Text style={[styles.text, { fontFamily: 'custom-font' }]}>Hello</Text>
          )}
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={sliderValue}
            onValueChange={(newValue) => setSliderValue(newValue)}
          />
          <Text style={styles.sliderValue}>Value: {sliderValue.toFixed(2)}</Text>
          <Button
            title="Go to New Page"
            onPress={() => navigation.navigate('NewPage')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

// Create a Stack Navigator for navigation between screens
const Stack = createStackNavigator();

// Define the main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NewPage" component={NewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Define styles for components using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    color: 'purple',
  },
  slider: {
    width: 200,
    marginTop: 20,
  },
  sliderValue: {
    fontSize: 24,
    marginTop: 10,
  },
});