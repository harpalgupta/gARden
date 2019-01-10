/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';

// import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroNode,
  Viro3DObject,
  ViroAmbientLight
  // ViroConstants
} from 'react-viro';

const lavObj = require('../res/lavender/lavender_plant.obj');
const lavMtl = require('../res/lavender/lavender_plant.mtl');
const lavPng = require('../res/lavender/lavender_plant.png');

class GardenARScene extends Component {
  state = {
    plant: {
      source: lavObj,
      resources: [lavMtl, lavPng],
      position: [0, 0, 0],
      scale: [0.0007, 0.0007, 0.0007],
      type: 'OBJ'
    }
  };
  // this._onInitialized = this._onInitialized.bind(this);
  // _onInitialized(
  //   // reason,
  //   state
  // ) {
  //   if (state === ViroConstants.TRACKING_NORMAL) {
  //     this.setState({
  //       // text: 'Hello World!'
  //     });
  //   } else if (state === ViroConstants.TRACKING_NONE) {
  //     // Handle loss of tracking
  //   }
  // }

  //       onTrackingUpdated={this._onInitialized} as props in VireARScene

  render() {
    const {
      plant: {
        source, resources, position, scale, type
      }
    } = this.state;
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
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

module.exports = GardenARScene;
