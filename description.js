import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, TextInput, TouchableOpacity } from 'react-native';

export default function Description({ navigation }) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  return (
    <ImageBackground
      source={require('./assets/Background.png')} // Replace with the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {/* Add a button to go back to the previous screen (NewPage.js) */}
          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.content}>
          {/* Text Input 1 */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>What emotions did you feel during this experience?</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter text here"
              onChangeText={(text) => setInput1(text)}
              value={input1}
              multiline={true}
              numberOfLines={4} // Adjust the number of lines as needed
            />
          </View>

          {/* Text Input 2 */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>How would you describe your current mental state?</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter text here"
              onChangeText={(text) => setInput2(text)}
              value={input2}
              multiline={true}
              numberOfLines={4} // Adjust the number of lines as needed
            />
          </View>

          {/* Text Input 3 */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>To what extent do you consider this experience positive or negative?</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter text here"
              onChangeText={(text) => setInput3(text)}
              value={input3}
              multiline={true}
              numberOfLines={4} // Adjust the number of lines as needed
            />
          </View>
        </View>

        {/* Help Button */}
        <TouchableOpacity
          style={styles.helpButton}
          onPress={() => navigation.navigate('Help')}
        >
          <Text style={styles.helpButtonText}>?</Text>
        </TouchableOpacity>
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
  inputContainer: {
    alignItems: 'center', // Center the title and input horizontally
  },
  inputTitle: {
    fontSize: 18,
    color: 'purple',
    marginBottom: 5,
    textAlign: 'center', // Center the text horizontally
  },
  input: {
    width: 300,
    height: 100, // Adjust the height as needed for larger text input spaces
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 8,
    textAlignVertical: 'top', // Align text to the top
  },
  helpButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 40,
    height: 40,
    backgroundColor: 'purple',
    borderRadius: 20, // Make it a circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpButtonText: {
    color: 'white',
    fontSize: 24,
  },
});
