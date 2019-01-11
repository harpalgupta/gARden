/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';

// import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroAmbientLight
  // ViroConstants,
} from 'react-viro';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { firestoreConfig } from '../../config/index';

import PlantObject from './PlantObject';

const settings = { timestampsInSnapshots: true };

firebase.initializeApp(firestoreConfig);
firebase.firestore().settings(settings);
const db = firebase.firestore();

class GardenARScene extends Component {
  state = {
    // plantAttr: { source: '', resources: [], scale: [] }
  };

  componentDidUpdate = (prevProps) => {
    const { sceneNavigator: { viroAppProps: { plantsOnScreen } } } = this.props;
    // console.log(prevProps.sceneNavigator.viroAppProps.plantsOnScreen !== plantsOnScreen);
    // console.log(this.props);
    // console.log(prevProps);
    if (prevProps.sceneNavigator.viroAppProps.plantsOnScreen !== plantsOnScreen) {
      const docRef = db.collection('plants').doc('lavender');

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
          // this.setState({});
            // const data = doc.data();
            // console.log('Document data:', doc.data());
          } else {
          // doc.data() will be undefined in this case
            // console.log('No such document!');
          }
        })
        .catch(() => {
          // console.log('Error getting document:', error);
        });
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
      sceneNavigator: {
        viroAppProps: { plantFiles, plantsOnScreen, removePlantFromRenderList }
      }
    } = this.props;
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        {plantsOnScreen.map(plant => (
          <PlantObject
            key={plant.id}
            removePlantFromRenderList={removePlantFromRenderList}
            filesForPlant={plantFiles[plant.name]}
            plantID={plant.id}
          />
        ))}
      </ViroARScene>
    );
  }
}

module.exports = GardenARScene;
