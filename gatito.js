//aqui va el gatito
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';



export default function NewPage() {
    const [sliderValue, setSliderValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the New Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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