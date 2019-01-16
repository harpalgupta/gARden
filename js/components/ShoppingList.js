import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ShoppingList extends Component {
  state = { plantsCounter: { 'English Lavender': 2, Lupin: 1 } };

  render() {
    const {
      plantsCounter: { Lupin }
    } = this.state;
    return (
      <View>
        <Text>{Lupin}</Text>
      </View>
    );
  }
}

export default ShoppingList;
