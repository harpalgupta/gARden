/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React, { Component } from 'react';
import {
  // AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';
import { viroAPIKey } from '../config';

// Sets the default scene you want for AR and VR
const InitialARScene = require('../js/gardenARScene');

const UNSET = 'UNSET';
const AR_NAVIGATOR_TYPE = 'AR';

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
const defaultNavigatorType = AR_NAVIGATOR_TYPE;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: { apiKey: viroAPIKey }
    };
    // this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    const { sharedProps } = this.state;

    return (
      <View style={styles.containerView}>
        <ViroARSceneNavigator {...sharedProps} initialScene={{ scene: InitialARScene }} />
      </View>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType
      });
    };
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET
    });
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    const { navigatorType } = this.state;
    if (navigatorType === UNSET) {
      return (
        <View>
          <Text>Navigator Type = UNSET (You have Exited Viro)</Text>
        </View>
      );
    }
    if (navigatorType === AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
    return null;
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1
  }
});

module.exports = ViroSample;
