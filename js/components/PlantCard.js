import React from 'react';
import { Text, View, Button } from 'react-native';

const PlantCard = (props) => {
  const { plantName, addPlantToRenderList } = props;

  const handleClick = () => {
    addPlantToRenderList(plantName);
  };

  return (
    <View>
      <Text>{plantName}</Text>
      <Button title={`Add ${plantName}`} onPress={handleClick} />
    </View>
  );
};

export default PlantCard;
