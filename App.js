import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewPage from './gatito'; // Import the NewPage component
import AnotherPage from './login';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPage"
          component={NewPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AnotherPage"
          component={AnotherPage}
          options={{ headerShown: false }} // Hide the header for AnotherPage
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/Background.png')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.text}>Track Cat</Text>
          
          {/* Add the "Log in" button */}
          <Button
            title="Log in"
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
})