import React from 'react';
import {
  // AppRegistry,
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import PlantCard from './PlantCard';
import api from '../api';


class PlantMenu extends React.Component {
  state = {
    data: [
      // { key: 'lavender' }, { key: 'rose' }
    ]
  }

  componentDidMount = async () => {
    this.fetchMenuItems();
  }

  fetchMenuItems = () => {
    api.getMenuItems().then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { data } = this.state;
          this.setState(
            { data: [...data, { key: doc.id }] }
          );
        });
      }
    );
  }

  render() {
    const { addPlantToRenderList } = this.props;
    const { data } = this.state;
    return (
      <View style={styles.menu}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PlantCard plantName={item.key} addPlantToRenderList={addPlantToRenderList} />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'green',
    width: 200,
    alignItems: 'center'
  }
});

export default PlantMenu;
