import React, { Component } from 'react';
import {
  // AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';
import { viroAPIKey } from '../config';

const GardenARScene = require('../js/gardenARScene');

export default class ViroSample extends Component {
  state = {
    sharedProps: { apiKey: viroAPIKey }
  };

  render() {
    const { sharedProps } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.containerView}>
        <ViroARSceneNavigator {...sharedProps} initialScene={{ scene: GardenARScene }} />
        <View style={styles.buttonView}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
            underlayColor="#00000000"
          >
            <Text style={{ color: 'white' }}>Back</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1
  },
  buttonView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    height: 50
  },
  button: { backgroundColor: 'blue', height: 20 }
});

module.exports = ViroSample;
