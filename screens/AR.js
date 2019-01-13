import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableHighlight, Image
} from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';
import { viroAPIKey } from '../config';
import PlantMenu from '../js/components/PlantMenu';
import { createID, filterArray } from '../utils/index';

const Home = require('../js/res/home.png');

const GardenARScene = require('../js/components/GardenARScene');

export default class ViroSample extends Component {
  state = {
    sharedProps: { apiKey: viroAPIKey },
    menuIsShown: false,
    plantsOnScreen: []
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuIsShown: !prevState.menuIsShown
    }));
  };

  addPlantToRenderList = (plantSlug) => {
    this.setState((prevState) => {
      const { plantsOnScreen } = prevState;
      const newID = createID(plantsOnScreen);
      return {
        plantsOnScreen: [...plantsOnScreen, { name: plantSlug, id: newID }]
      };
    });
  };

  removePlantFromRenderList = (id) => {
    this.setState((prevState) => {
      const { plantsOnScreen } = prevState;
      const filteredArray = filterArray(plantsOnScreen, id);
      return {
        plantsOnScreen: [...filteredArray]
      };
    });
  };

  render() {
    const { sharedProps, menuIsShown, plantsOnScreen } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.containerView}>
        <ViroARSceneNavigator
          {...sharedProps}
          initialScene={{ scene: GardenARScene }}
          viroAppProps={{
            plantsOnScreen,
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
            <Image style={styles.icon} source={Home} />
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
  button: { backgroundColor: 'rgba(10,10,10,0)', height: 50, width: 50 },
  icon: {
    width: 60,
    height: 60
  }
});

module.exports = ViroSample;
