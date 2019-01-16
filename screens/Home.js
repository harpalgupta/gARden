import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableHighlight, Image
} from 'react-native';
import { firebase } from '../config';

const logo = require('../assets/logo.png');

export default class Home extends Component {
  state = {
    // plantsUrlArray: []
  };

  logOut = () => {
    const { navigation } = this.props;
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('WelcomeScreen');
      });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text2}>This is the home page.</Text> */}
        {/* <Button
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
        /> */}
        <Image style={{ height: 280, width: 280, marginBottom: 20 }} source={logo} />
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
          <Text style={styles.text}> About! </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.logOut} underlayColor="#fff">
          <Text style={styles.text}>Log Out</Text>
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
    backgroundColor: 'white'
  },
  text: {
    fontSize: 25,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    color: 'rgba(74,111,165,0.7)'
  },
  text2: {
    fontSize: 25,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    marginBottom: 10,
    color: 'rgba(74,111,165,0.7)'
  },
  button: {
    borderWidth: 1,
    borderColor: 'rgba(74,111,165,0.5)',
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: '4%'
  }
});
