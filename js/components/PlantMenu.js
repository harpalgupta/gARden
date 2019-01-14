import React, { Component } from 'react';
import {
  // AppRegistry,
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import FadeInView from './FadeInView';

import PlantCard from './PlantCard';
import api from '../api';

class PlantMenu extends Component {
  state = {
    data: [
      // { key: 'lavender' }, { key: 'rose' }
    ]
  };

  componentDidMount = () => {
    this.fetchMenuItems();
  };

  fetchMenuItems = () => {
    api.getMenuItems().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { data } = this.state;
        this.setState({ data: [...data, { key: doc.id }] });
      });
    });
  };

  render() {
    const { addPlantToRenderList } = this.props;
    const { data } = this.state;
    return (
      <View style={styles.menu}>
        <FadeInView
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: 'powderblue'
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PlantCard plantName={item.key} addPlantToRenderList={addPlantToRenderList} />
            )}
          />
        </FadeInView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'transparent',
    width: 200,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    right: 0,
    height: '100%'
  }
});

export default PlantMenu;
