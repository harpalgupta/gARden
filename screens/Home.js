import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
  state = {};

  // If this remains empty we should make it a pure function component
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the home page.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40
  }
});
