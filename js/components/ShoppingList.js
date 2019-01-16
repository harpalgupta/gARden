import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

class ShoppingList extends Component {
  state = {
    plantsCounter: { 'English Lavender': 2, Lupin: 1 }
  };

  restructureCounter = obj => Object.entries(obj);

  render() {
    const { plantsCounter } = this.state;
    return (
      <View style={styles.tableContainer}>
        <Table>
          <Row data={['Plant', 'No.']} />
          <Rows data={this.restructureCounter(plantsCounter)} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tableContainer: {
    width: 300,
    height: 300
  },
  table: {}
});
export default ShoppingList;
