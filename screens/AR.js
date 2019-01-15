/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableHighlight, Image, Text
} from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';
import { viroAPIKey } from '../config';
import PlantMenu from '../js/components/PlantMenu';
// import { filterArray } from '../utils/index';

const home = require('../js/res/home.png');
const menu = require('../js/res/menu.png');

const GardenARScene = require('../js/components/GardenARScene');

export default class ViroSample extends Component {
  state = {
    sharedProps: { apiKey: viroAPIKey },
    menuIsShown: false,
    isARLoading: false,
    plantTypeCounter: {},
    parentIsScreenshotTaken: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuIsShown: !prevState.menuIsShown
    }));
  };

  toggleScreenShotState = () => {
    this.setState(prevState => ({
      parentIsScreenshotTaken: !prevState.parentIsScreenshotTaken
    }));
  };

  makeIsARLoadingTrue = () => {
    const { isARLoading } = this.state;
    if (isARLoading !== true) {
      this.setState({
        isARLoading: true
      });
    }
  };

  makeIsARLoadingFalse = () => {
    const { isARLoading } = this.state;
    if (isARLoading !== false) {
      this.setState({
        isARLoading: false
      });
    }
  };

  addPlantToRenderList = (plantSlug) => {
    this.setState(
      (prevState) => {
        const { plantTypeCounter } = prevState;
        // const newID = createID(plantTypeCounter);
        if (plantTypeCounter[plantSlug]) {
          return {
            plantTypeCounter: {
              ...plantTypeCounter,
              [plantSlug]: plantTypeCounter[plantSlug] + 1
            }
          };
        }
        return {
          plantTypeCounter: {
            ...plantTypeCounter,
            [plantSlug]: 1
          }
        };
      },
      () => {
        // console.log(this.state.plantTypeCounter, '<<< state');
      }
    );
  };

  // removePlantFromRenderList = (id) => {
  //   this.setState((prevState) => {
  //     const { plantTypeCounter } = prevState;
  //     const filteredArray = filterArray(plantTypeCounter, id);
  //     return {
  //       plantTypeCounter: [...filteredArray]
  //     };
  //   });
  // };

  lowerPlantCounterByType = (plantType) => {
    this.setState((prevState) => {
      const { plantTypeCounter } = prevState;
      return {
        plantTypeCounter: {
          ...plantTypeCounter,
          [plantType]: plantTypeCounter[plantType] - 1
        }
      };
    });
  };

  render() {
    const {
      sharedProps,
      menuIsShown,
      plantTypeCounter,
      isARLoading,
      parentIsScreenshotTaken
    } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.containerView}>
        {isARLoading && <Text>jlkjlkj</Text>}
        <ViroARSceneNavigator
          {...sharedProps}
          initialScene={{ scene: GardenARScene }}
          viroAppProps={{
            plantTypeCounter,
            parentIsScreenshotTaken,
            lowerPlantCounterByType: this.lowerPlantCounterByType,
            makeIsARLoadingTrue: this.makeIsARLoadingTrue,
            makeIsARLoadingFalse: this.makeIsARLoadingFalse
          }}
          takeScreenshot
        />
        <View style={styles.buttonView}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
            underlayColor="#00000000"
          >
            <Image style={styles.icon} source={home} />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggleMenu}
            underlayColor="#00000000"
          >
            <Image style={styles.icon} source={menu} />
          </TouchableHighlight>
          {/* take screenshot */}
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggleScreenShotState}
            underlayColor="#00000000"
          >
            <Image style={styles.icon} source={menu} />
          </TouchableHighlight>
        </View>

        {menuIsShown && <PlantMenu addPlantToRenderList={this.addPlantToRenderList} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonView: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'rgba(52,52,52,0)'
  },
  button: { backgroundColor: 'rgba(10,10,10,0)', height: 50, width: 50 },
  icon: {
    width: 60,
    height: 60
  }
});

module.exports = ViroSample;
