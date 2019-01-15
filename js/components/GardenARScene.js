/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';

import { ViroARScene, ViroAmbientLight } from 'react-viro';

import { checkForNewSlug, createID, filterArray } from '../../utils';
import 'firebase/firestore';
import api from '../api';
import PlantObject from './PlantObject';

class GardenARScene extends Component {
  state = {
    plantFiles: {},
    plantsToRender: [],
    childIsScreenshotTaken: false,
    childIsReset: false
  };

  addScreenshot = async () => {
    const { sceneNavigator } = this.props;
    sceneNavigator.takeScreenshot('aFile', true);
  };

  componentDidUpdate = () => {
    const {
      sceneNavigator: {
        viroAppProps: {
          plantTypeCounter, makeIsARLoadingTrue, parentIsScreenshotTaken, isReset, resetCounter
        }
      }
    } = this.props;
    const {
      plantsToRender, plantFiles, childIsScreenshotTaken, childIsReset
    } = this.state;
    const numOfPlants = Object.values(plantTypeCounter).reduce((acc, val) => acc + val, 0);
    const isNewObj = checkForNewSlug(Object.keys(plantFiles), Object.keys(plantTypeCounter));
    const { bool, slugName } = isNewObj;

    if (bool && plantsToRender !== plantTypeCounter) {
      makeIsARLoadingTrue();
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
    if (parentIsScreenshotTaken !== childIsScreenshotTaken) {
      this.addScreenshot();
      this.setState(prevState => ({
        childIsScreenshotTaken: !prevState.childIsScreenshotTaken
      }));
    }
    if (isReset !== childIsReset) {
      this.setState({
        childIsReset: isReset,
        plantsToRender: [],
        plantFiles: {}

      });
      resetCounter();
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
    const {
      sceneNavigator: {
        viroAppProps: { makeIsARLoadingFalse }
      }
    } = this.props;
    api.getPlantAttributes().then((doc) => {
      if (doc.exists) {
        const {
          attrsObj: {
            [slugName]: { obj, texture, scale }
          }
        } = doc.data();
        this.setState(
          prevState => ({
            plantFiles: {
              ...prevState.plantFiles,
              [slugName]: { obj, texture, scale }
            }
          }),
          () => {
            makeIsARLoadingFalse();
          }
        );
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
        <ViroAmbientLight color="#ffffff" influenceBitMask={1} />
        {/* <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow
        /> */}

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
