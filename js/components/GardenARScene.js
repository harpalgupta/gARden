/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';

// import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroAmbientLight
  // ViroConstants,
} from 'react-viro';

import { checkForNewSlug, createID } from '../../utils';
import 'firebase/firestore';
import { firebase } from '../../config/index';

import PlantObject from './PlantObject';

const db = firebase.firestore();

class GardenARScene extends Component {
  state = {
    plantFiles: {},
    plantSlugs: [],
    newArray: []
  };

  componentDidUpdate = () => {
    const {
      sceneNavigator: {
        viroAppProps: { plantsOnScreen }
      }
    } = this.props;
    const { newArray, plantFiles } = this.state;

    const numOfPlants = Object.values(plantsOnScreen).reduce((acc, val) => acc + val, 0);
    // console.log(numOfPlants);

    const isNewObj = checkForNewSlug(Object.keys(plantFiles), Object.keys(plantsOnScreen));
    const { bool, slugName } = isNewObj;
    // const numOfPlants = Object.values(plantsOnScreen).reduce((acc, val) => acc + val, 0);
    // console.log(numOfPlants);
    if (bool && newArray !== plantsOnScreen) {
      const docRef = db.collection('plants').doc(slugName);
      docRef.get().then((doc) => {
        if (doc.exists) {
          const {
            objAttr: { obj, texture, scale }
          } = doc.data();
          this.setState(prevState => ({
            plantFiles: {
              ...prevState.plantFiles,
              [isNewObj.slugName]: { obj, texture, scale }
            },
            plantSlugs: [...prevState.plantSlugs, isNewObj.slugName]
          }));
        } else {
          // doc.data() will be undefined in this case
          // console.log('No such document!');
        }
      });
    } else if (newArray.length !== numOfPlants) {
      let newTypeToRender = '';
      Object.keys(plantsOnScreen).forEach((plantType) => {
        if (
          plantsOnScreen[plantType] !== newArray.filter(plant => plant.name === plantType).length
        ) {
          newTypeToRender = plantType;
        }
      });
      this.setState((prevState) => {
        const newPlant = { name: newTypeToRender, id: createID(prevState.newArray) };
        return { newArray: [...prevState.newArray, newPlant] };
      });
    }
  };

  render() {
    const {
      sceneNavigator: {
        viroAppProps: { removePlantFromRenderList }
      }
    } = this.props;
    const { newArray, plantFiles } = this.state;
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        {newArray.map(plant => (
          <PlantObject
            key={plant.id}
            removePlantFromRenderList={removePlantFromRenderList}
            filesForPlant={plantFiles[plant.name]}
            plantID={plant.id}
            plantName={plant.name}
          />
        ))}
      </ViroARScene>
    );
  }
}

module.exports = GardenARScene;
