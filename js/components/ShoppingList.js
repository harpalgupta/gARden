import React, { Component } from 'react';
import { View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

class ShoppingList extends Component {
  state = {
    // plantsCounter: { 'English Lavender': 2, Lupin: 1 }
  };

  render() {
    // const {
    //   plantsCounter
    // } = this.state;
    return (
      <View>
        <Table>
          <Row data={['No.', 'Plant']} />
          <Rows data={[['2', 'Lavender'], ['1', 'Banana']]} />
        </Table>
      </View>
    );
  }
}

export default ShoppingList;
