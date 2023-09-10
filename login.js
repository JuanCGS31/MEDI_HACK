import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnotherPage() {
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