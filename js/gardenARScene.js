/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene, ViroNode, Viro3DObject, ViroAmbientLight, ViroConstants
} from 'react-viro';

const lavObj = require('./res/lavender/lavender_plant.obj');
const lavMtl = require('./res/lavender/lavender_plant.mtl');
const lavPng = require('./res/lavender/lavender_plant.png');

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      plant: {
        source: lavObj,
        resources: [lavMtl, lavPng],
        position: [0, 0, 0],
        scale: [0.0007, 0.0007, 0.0007],
        type: 'OBJ'
      }
      // text: 'Initializing AR...'
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  _onInitialized(
    // reason,
    state
  ) {
    if (state === ViroConstants.TRACKING_NORMAL) {
      this.setState({
        // text: 'Hello World!'
      });
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  render() {
    const {
      plant: {
        source, resources, position, scale, type
      }
    } = this.state;
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" style={styles.helloWorldTextStyle} />
        <ViroNode position={[0, -1, -1]} dragType="FixedToWorld" onDrag={() => {}}>
          <Viro3DObject
            source={source}
            resources={resources}
            position={position}
            scale={scale}
            type={type}
          />
        </ViroNode>
      </ViroARScene>
    );
  }
}

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

module.exports = HelloWorldSceneAR;
