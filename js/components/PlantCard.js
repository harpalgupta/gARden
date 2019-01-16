import React from 'react';
import {
  View, TouchableHighlight, StyleSheet, Image, Text
} from 'react-native';

const info = require('../res/infoImg.png');
const add = require('../res/addImg.png');
const wateringCan = require('../res/wateringCanGif.gif');

const PlantCard = (props) => {
  const {
    plantName, addPlantToRenderList, toggleInfoPage, icon
  } = props;

  const handleClick = () => {
    addPlantToRenderList(plantName);
  };

  return (
    <View style={styles.plantCard}>
      <Text style={{ flex: 1, width: '100%', textAlign: 'center' }}>{plantName}</Text>
      <View style={{ flex: 3, flexDirection: 'row' }}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={handleClick}>
            <Image style={styles.icon} source={add} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => toggleInfoPage(plantName, icon)}>
            <Image style={styles.icon} source={info} />
          </TouchableHighlight>
        </View>

        <Image source={wateringCan} style={{ flex: 2 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plantCard: {
    backgroundColor: '#8FBB99',
    height: 175,
    alignItems: 'center',
    borderBottomColor: '#8FBB99',
    borderBottomWidth: 3
  },
  buttonContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 60,
    width: 60
  }
});

export default PlantCard;
