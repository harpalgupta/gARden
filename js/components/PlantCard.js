import React from 'react';
import {
  View, Button, StyleSheet, Image
} from 'react-native';

const PlantCard = (props) => {
  const {
    plantName, addPlantToRenderList, toggleInfoPage, icon
  } = props;

  const handleClick = () => {
    addPlantToRenderList(plantName);
  };

  return (
    <View style={styles.plantCard}>
      <Button title={plantName} onPress={handleClick} />
      <Button title="i" onPress={() => toggleInfoPage(plantName)} />
      <Image source={{ uri: icon }} style={{ height: 30, width: 30 }} />
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
