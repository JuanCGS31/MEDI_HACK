import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewPage from './gatito'; // Import the NewPage component
import AnotherPage from './login';

export default function App() {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NewPage" component={NewPage} />
        <Stack.Screen name="AnotherPage" component={AnotherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/Background.png')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.text}>Hello</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={sliderValue}
            onValueChange={(newValue) => setSliderValue(newValue)}
          />
          <Text style={styles.sliderValue}>Value: {sliderValue.toFixed(2)}</Text>
          
          {/* Add a button to navigate to the NewPage */}
          <Button
            title="Go to New Page"
            onPress={() => navigation.navigate('NewPage')}
          />
          {/* Add the second button to navigate to AnotherPage */}
          <Button
            title="Go to Another Page"
            onPress={() => navigation.navigate('AnotherPage')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();

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