import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import api from '../api/index';

class ShoppingList extends Component {
  state = {
    savedList: []
  };

  restructureCounter = obj => Object.entries(obj);

  componentDidMount = () => {
    api.getShopplingList().then((list) => {
      const listFormat = this.restructureCounter(list);
      this.setState({ savedList: listFormat });
    });
  };

  render() {
    const { savedList } = this.state;
    return (
      <View style={styles.tableContainer}>
        <Table>
          <Row data={['Plant', 'No.']} />
          <Rows data={savedList} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tableContainer: {
    width: 300,
    height: 300
  }
});
export default ShoppingList;
