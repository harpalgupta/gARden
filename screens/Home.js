import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet, TouchableHighlight
} from 'react-native';

export default class Home extends Component {
  state = {
    // plantsUrlArray: []
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the home page.</Text>
        <Button
          title="go to AR!"
          onPress={() => {
            navigation.navigate('ARScreen');
          }}
        />
        <Button
          title="go to About!"
          onPress={() => {
            navigation.navigate('About');
          }}
          style={styles.button}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            navigation.navigate('ARScreen');
          }}
          underlayColor="#fff"
        >
          <Text style={styles.text}>Go to AR!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            navigation.navigate('About');
          }}
          underlayColor="#fff"
        >
          <Text style={styles.text}>Go to AR!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(153, 238, 153, 0.329)'
  },
  text: {
    fontSize: 25,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30
  },
  button: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: '3%'
  }
});
