import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import api from '../api';
import StoreCard from './StoreCard';

class Stores extends Component {
  state = {
    stores: []
  };

  componentDidMount = () => {
    api.getStores().then((stores) => {
      this.setState({ stores });
    });
  };

  render() {
    const { stores } = this.state;
    return (
      <View>
        {stores.length > 0 && (
          <FlatList data={stores} renderItem={({ item }) => <StoreCard storeInfo={item} />} />
        )}
      </View>
    );
  }
}

export default Stores;
