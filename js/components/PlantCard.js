import React from 'react';
import {
  Text, View, Button, Image
} from 'react-native';

const PlantCard = (props) => {
  const { plantName, addPlantToRenderList } = props;

  const handleClick = () => {
    addPlantToRenderList(plantName);
  };

  return (
    <View>
      <Text>{plantName}</Text>
      <Button title={`Add ${plantName}`} onPress={handleClick} />
      <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
      <Text>Icon</Text>
    </View>
  );
};

export default PlantCard;
