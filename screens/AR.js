import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableHighlight, Image
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
    plantTypeCounter: {}
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuIsShown: !prevState.menuIsShown
    }));
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
    const { sharedProps, menuIsShown, plantTypeCounter } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.containerView}>
        <ViroARSceneNavigator
          {...sharedProps}
          initialScene={{ scene: GardenARScene }}
          viroAppProps={{
            plantTypeCounter,
            lowerPlantCounterByType: this.lowerPlantCounterByType
          }}
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
