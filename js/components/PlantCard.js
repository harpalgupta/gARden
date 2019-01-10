import React from 'react';
import { Text, View, Button } from 'react-native';

const PlantCard = (props) => {
  const { plantName } = props;

  const handleClick = () => {
    // console.log('hiya');
  };

  return (
    <View>
      <Text>{plantName}</Text>
      <Button title={`Add ${plantName}`} onPress={handleClick} />
    </View>
  );
};

export default PlantCard;
