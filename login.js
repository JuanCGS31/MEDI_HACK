import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function AnotherPage({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add your login logic here
    // For example, you can send the username and password to a server for authentication
    // This is a basic example for demonstration purposes
    if (username === 'email@gmail.com' && password === 'Password') {
      // Navigate to the "NewPage" upon successful login
      navigation.navigate('NewPage');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {/* Add a button to go back to the previous screen (App.js) */}
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Login Page</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry // Hide password input
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: 'blue',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 8,
  },
});