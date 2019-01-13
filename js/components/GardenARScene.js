/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';

// import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroAmbientLight
  // ViroConstants,
} from 'react-viro';

import * as firebase from 'firebase';
// import { checkForNewSlug } from '../../utils';
import 'firebase/firestore';
import { firestoreConfig } from '../../config/index';

import PlantObject from './PlantObject';

const settings = { timestampsInSnapshots: true };

firebase.initializeApp(firestoreConfig);
firebase.firestore().settings(settings);
// const db = firebase.firestore();

class GardenARScene extends Component {
  state = {
    // plantFiles: { lavender: { obj: '', texture: [], scale: [] } },
    // plantSlugs: ['rose', 'lavender'],
    newArray: []
  };

  componentDidUpdate = () => {
    const {
      sceneNavigator: {
        viroAppProps: { plantsOnScreen }
      }
    } = this.props;
    const { newArray } = this.state;
    // const isNewObj = checkForNewSlug(plantSlugs, plantsOnScreen);
    // if (isNewObj.bool) {
    //   const docRef = db.collection('plants').doc(isNewObj.slugName);
    //   docRef.get().then((doc) => {
    //     if (doc.exists) {
    //       const {
    //         objAttr: { obj, texture, scale }
    //       } = doc.data();
    //       this.setState(
    //         prevState => ({
    //           plantFiles: {
    //             ...prevState.plantFiles,
    //             [isNewObj.slugName]: { obj, texture, scale }
    //           },
    //           plantSlugs: [...prevState.plantSlugs, isNewObj.slugName]
    //         }),
    //         () => {
    //           console.log(this.state);
    //         }
    //       );
    //     } else {
    //       // doc.data() will be undefined in this case
    //       // console.log('No such document!');
    //     }
    //   });
    // }
    if (newArray !== plantsOnScreen) {
      this.setState(() => ({
        newArray: plantsOnScreen
      }));
    }
  };

  render() {
    const {
      sceneNavigator: {
        viroAppProps: { removePlantFromRenderList, plantFiles }
      }
    } = this.props;
    const { newArray } = this.state;
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        {newArray.map(plant => (
          <PlantObject
            key={plant.id}
            removePlantFromRenderList={removePlantFromRenderList}
            // filesForPlant={plantFiles[plant.name]}
            filesForPlant={plantFiles[plant.name]}
            plantID={plant.id}
          />
        ))}
      </ViroARScene>
    );
  }
}

module.exports = GardenARScene;
