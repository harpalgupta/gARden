import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button
} from 'react-native';

export default class Home extends Component {
  state = {
    // plantsUrlArray: []
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the about page.</Text>
        <Button title="Back" onPress={() => { navigation.navigate('HomeScreen'); }} />
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
