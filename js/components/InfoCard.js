import React, { Component } from 'react';
import {
  View, Button, StyleSheet, Text
} from 'react-native';

export default class InfoCard extends Component {
  state = {
    // info: null
  };

  render() {
    const { toggleInfoPage } = this.props;
    return (
      <View style={styles.plantCard}>
        <Button title="back" onPress={() => toggleInfoPage(null)} />
        <Text>Hello Im the info page</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  plantCard: {
    backgroundColor: 'white',
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 6,
    marginRight: 6
  }
});
