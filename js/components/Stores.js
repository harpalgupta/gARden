import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../api/index';

class Stores extends Component {
  state = {};

  componentDidMount = () => {
    api.getStores();
  };

  render() {
    return <Text>Here</Text>;
  }
}

export default Stores;
