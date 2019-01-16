import React, { Component } from 'react';
import {
  View, Button, StyleSheet, Text
} from 'react-native';

import api from '../api';

export default class InfoCard extends Component {
  state = {
    aspect: [],
    botanicalName: '',
    commonName: '',
    difficulty: '',
    floweringTime: '',
    height: '',
    plantingTime: '',
    spread: ''
  };

  componentDidMount = () => {
    const { plantName } = this.props;
    this.fetchPlantInfo(plantName);
  };

  fetchPlantInfo = (plantName) => {
    api.getPlantInfo(plantName).then((doc) => {
      const {
        infoObj: {
          [plantName]: {
            aspect,
            botanicalName,
            commonName,
            difficulty,
            floweringTime,
            height,
            plantingTime,
            spread
          }
        }
      } = doc.data();
      this.setState({
        aspect,
        botanicalName,
        commonName,
        difficulty,
        floweringTime,
        height,
        plantingTime,
        spread
      });
    });
  };

  render() {
    const { toggleInfoPage } = this.props;
    const {
      aspect,
      botanicalName,
      commonName,
      difficulty,
      floweringTime,
      height,
      plantingTime,
      spread
    } = this.state;
    return (
      <View style={styles.plantCard}>
        <Button title="back" onPress={() => toggleInfoPage(null)} />
        <Text style={{ fontSize: 20, alignText: 'center' }}>{commonName}</Text>
        <Text style={styles.textLine}>
          Botanical name:
          {botanicalName}
        </Text>
        <Text style={styles.textLine}>
          Difficulty:
          {difficulty}
          {' '}
/ 5
        </Text>
        <Text style={styles.textLine}>
          Flowering season:
          {floweringTime}
        </Text>
        <Text style={styles.textLine}>{height}</Text>
        <Text style={styles.textLine}>
Propagation :
          {plantingTime}
        </Text>
        <Text style={styles.textLine}>
          Maximum Spread:
          {spread}
        </Text>
        {aspect.map(direction => (
          <Text key={direction}>{direction}</Text>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  plantCard: {
    backgroundColor: 'white',
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 6,
    marginRight: 6,
    flex: 1
  },
  textLine: {
    marginTop: 10
  }
});
