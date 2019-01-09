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

const InitialARScene = require('../js/gardenARScene');

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps: { apiKey: viroAPIKey }
    };
    this._getARNavigator = this._getARNavigator.bind(this);
  }

  _getARNavigator() {
    const { sharedProps } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.containerView}>
        <ViroARSceneNavigator {...sharedProps} initialScene={{ scene: InitialARScene }} />
        <View style={styles.buttonView}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
            underlayColor="#00000000"
          >
            <Text style={{ color: 'white' }}>Click ME</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  render() {
    return this._getARNavigator();
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
