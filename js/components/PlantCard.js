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
  console.log(props);
  return (
    <View style={styles.plantCard}>
      <View style={styles.header}>
        <Text
          style={{
            flex: 1,
            marginTop: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20
          }}
        >
          {plantName}
        </Text>
      </View>

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
    margin: 3,
    borderRadius: 2
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
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default PlantCard;
