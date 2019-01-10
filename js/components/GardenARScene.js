/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';

// import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroNode,
  Viro3DObject,
  ViroAmbientLight,
  ViroText
  // ViroConstants
} from 'react-viro';

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
        {plantsOnScreen.map((plant, index) => (
          <ViroNode position={[0, -1, -1]} dragType="FixedToWorld" onDrag={() => {}} key={index}>
            <Viro3DObject
              source={plantFiles[plant].source}
              resources={plantFiles[plant].resources}
              position={plantFiles[plant].position}
              scale={plantFiles[plant].scale}
              type={plantFiles[plant].type}
            />
          </ViroNode>
        ))}
      </ViroARScene>
    );
  }
}

module.exports = GardenARScene;
