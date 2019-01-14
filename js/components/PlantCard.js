import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const PlantCard = (props) => {
  const { plantName, addPlantToRenderList } = props;

  const handleClick = () => {
    addPlantToRenderList(plantName);
  };

  return (
    <View style={styles.plantCard}>
      <Button title={plantName} onPress={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  plantCard: {
    backgroundColor: 'white',
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 6,
    marginRight: 6
  }
});

export default PlantCard;
