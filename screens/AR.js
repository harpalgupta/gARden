import React, { Component } from 'react';
import {
  // AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList
} from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';
import { viroAPIKey } from '../config';

const GardenARScene = require('../js/gardenARScene');

export default class ViroSample extends Component {
  state = {
    sharedProps: { apiKey: viroAPIKey },
    menuIsShown: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuIsShown: !prevState.menuIsShown
    }));
  };

  render() {
    const { sharedProps, menuIsShown } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.containerView}>
        <ViroARSceneNavigator {...sharedProps} initialScene={{ scene: GardenARScene }} />
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

        {menuIsShown && (
          <View style={styles.menu}>
            <FlatList
              data={[{ key: 'lavender' }]}
              renderItem={({ item }) => <Text>{item.key}</Text>}
            />
          </View>
        )}
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
  button: { backgroundColor: 'blue', height: 50, width: 50 },
  menu: {
    backgroundColor: 'green',
    width: 200
  }
});

module.exports = ViroSample;
