import React from 'react';
import {
  // AppRegistry,
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import PlantCard from './PlantCard';

const PlantMenu = ({ addPlantToRenderList }) => (
  <View style={styles.menu}>
    <FlatList
      data={[{ key: 'lavender' }, { key: 'rose' }]}
      renderItem={({ item }) => (
        <PlantCard plantName={item.key} addPlantToRenderList={addPlantToRenderList} />
      )}
    />
  </View>
);
const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'green',
    width: 200,
    alignItems: 'center'
  }
});

export default PlantMenu;
