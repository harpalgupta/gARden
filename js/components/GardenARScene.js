/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';

// import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroNode,
  Viro3DObject,
  ViroAmbientLight,
  // ViroConstants,
  ViroButton
} from 'react-viro';

import PlantObject from './PlantObject';

// const lavObj = require('../res/lavender/lavender_plant.obj');
// const lavMtl = require('../res/lavender/lavender_plant.mtl');
// const lavPng = require('../res/lavender/lavender_plant.png');

class GardenARScene extends Component {
  state = {
    // plant: {
    //   source: lavObj,
    //   resources: [lavMtl, lavPng],
    //   position: [0, 0, 0],
    //   scale: [0.0007, 0.0007, 0.0007],
    //   type: 'OBJ'
    // }
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
      sceneNavigator: {
        viroAppProps: { plantFiles, plantsOnScreen }
      }
    } = this.props;
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        {plantsOnScreen.map(plant => (
          <PlantObject filesForPlant={plantFiles[plant]} />
        ))}
      </ViroARScene>
    );
  }
}

module.exports = GardenARScene;
