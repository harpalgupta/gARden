import React, { Component } from 'react';
import {
  // AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';
import { viroAPIKey } from '../config';
import PlantMenu from '../js/components/PlantMenu';
import { createID, filterArray } from '../utils/index';

const GardenARScene = require('../js/components/GardenARScene');
const lavObj = require('../js/res/lavender/lavender_plant.obj');
const lavMtl = require('../js/res/lavender/lavender_plant.mtl');
const lavPng = require('../js/res/lavender/lavender_plant.png');
const roseObj = require('../js/res/rose/rose.obj');
const roseMtl = require('../js/res/rose/rose.mtl');
const rosePng = require('../js/res/rose/rose.jpg');

export default class ViroSample extends Component {
  state = {
    sharedProps: { apiKey: viroAPIKey },
    menuIsShown: false,
    viroAppProps: {
      plantsOnScreen: [{ name: 'rose', id: 'ROSEID' }],
      plantFiles: {
        lavender: {
          source: lavObj,
          resources: [lavMtl, lavPng],
          position: [0, 0, 0],
          scale: [0.0007, 0.0007, 0.0007],
          type: 'OBJ'
        },
        rose: {
          source: roseObj,
          resources: [roseMtl, rosePng],
          position: [0, 0, 0],
          scale: [0.007, 0.007, 0.007],
          type: 'OBJ'
        }
      }
    }
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuIsShown: !prevState.menuIsShown
    }));
  };

  addPlantToRenderList = (plantSlug) => {
    this.setState((prevState) => {
      const { plantsOnScreen, plantFiles } = prevState.viroAppProps;
      const newID = createID(plantsOnScreen);
      return {
        viroAppProps: {
          plantsOnScreen: [...plantsOnScreen, { name: plantSlug, id: newID }],
          plantFiles: { ...plantFiles }
        }
      };
    });
  };

  removePlantFromRenderList = (id) => {
    this.setState((prevState) => {
      const {
        plantsOnScreen,
        plantFiles
      } = prevState.viroAppProps;
      const filteredArray = filterArray(plantsOnScreen, id);
      return {
        viroAppProps: {
          plantsOnScreen: [...filteredArray],
          plantFiles: { ...plantFiles }
        }
      };
    });
  }


  render() {
    const { sharedProps, menuIsShown, viroAppProps } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.containerView}>
        <ViroARSceneNavigator
          {...sharedProps}
          initialScene={{ scene: GardenARScene }}


          viroAppProps={{
            ...viroAppProps,
            removePlantFromRenderList: this.removePlantFromRenderList
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
            <Text style={{ color: 'white' }}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggleMenu}
            underlayColor="#00000000"
          >
            <Text style={{ color: 'white' }}>menu</Text>
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
  button: { backgroundColor: 'rgba(10,10,10,0)', height: 50, width: 50 }
});

module.exports = ViroSample;
