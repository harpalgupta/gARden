import React from 'react';
import {
  // AppRegistry,
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import PlantCard from './PlantCard';

const PlantMenu = () => (
  <View style={styles.menu}>
    <FlatList
      data={[{ key: 'lavender' }]}
      renderItem={({ item }) => <PlantCard plantName={item.key} />}
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
