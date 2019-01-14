/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';

import {
  ViroARScene,
  ViroAmbientLight
  // ViroConstants,
} from 'react-viro';

import { checkForNewSlug, createID, filterArray } from '../../utils';
import 'firebase/firestore';
import api from '../api';
import PlantObject from './PlantObject';

class GardenARScene extends Component {
  state = {
    plantFiles: {},
    plantSlugs: [],
    plantsToRender: []
  };

  componentDidUpdate = () => {
    const {
      sceneNavigator: {
        viroAppProps: { plantTypeCounter }
      }
    } = this.props;
    const { plantsToRender, plantFiles } = this.state;
    const numOfPlants = Object.values(plantTypeCounter).reduce((acc, val) => acc + val, 0);
    const isNewObj = checkForNewSlug(Object.keys(plantFiles), Object.keys(plantTypeCounter));
    const { bool, slugName } = isNewObj;

    if (bool && plantsToRender !== plantTypeCounter) {
      this.fetchPlantAttributes(slugName);
    } else if (plantsToRender.length !== numOfPlants) {
      let newTypeToRender = '';
      Object.keys(plantTypeCounter).forEach((plantType) => {
        if (
          plantTypeCounter[plantType]
          !== plantsToRender.filter(plant => plant.name === plantType).length
        ) {
          newTypeToRender = plantType;
        }
      });
      this.setState((prevState) => {
        const newPlant = { name: newTypeToRender, id: createID(prevState.plantsToRender) };
        return { plantsToRender: [...prevState.plantsToRender, newPlant] };
      });
    }
  };

  removePlantFromRenderList = (id) => {
    this.setState((prevState) => {
      const { plantsToRender } = prevState;
      const filteredArray = filterArray(plantsToRender, id);
      return {
        plantsToRender: [...filteredArray]
      };
    });
  };

  fetchPlantAttributes = (slugName) => {
    api.getPlantAttributes(slugName).then((doc) => {
      if (doc.exists) {
        const {
          objAttr: { obj, texture, scale }
        } = doc.data();
        this.setState(prevState => ({
          plantFiles: {
            ...prevState.plantFiles,
            [slugName]: { obj, texture, scale }
          },
          plantSlugs: [...prevState.plantSlugs, slugName]
        }));
      } else {
        // doc.data() will be undefined in this case
        // console.log('No such document!');
      }
    });
  };

  render() {
    const {
      sceneNavigator: {
        viroAppProps: { lowerPlantCounterByType }
      }
    } = this.props;
    const { plantsToRender, plantFiles } = this.state;
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        {plantsToRender.map(plant => (
          <PlantObject
            key={plant.id}
            removePlantFromRenderList={this.removePlantFromRenderList}
            filesForPlant={plantFiles[plant.name]}
            plantID={plant.id}
            plantName={plant.name}
            lowerPlantCounterByType={lowerPlantCounterByType}
          />
        ))}
      </ViroARScene>
    );
  }
}

module.exports = GardenARScene;
