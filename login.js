import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function NewPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the New Page</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewPage;