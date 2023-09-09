import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';

class SliderExample extends React.Component {
    state = {
        value: 0.2,
    };

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    value={this.state.value}
                    onValueChange={value => this.setState({value})}
                />
                <Text>Value: {this.state.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});

AppRegistry.registerComponent('SliderExample', () => SliderExample);


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

