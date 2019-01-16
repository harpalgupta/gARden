import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button
} from 'react-native';
import ShoppingList from '../js/components/ShoppingList';

export default class Home extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the about page.</Text>
        <Button
          title="Back"
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
        <ShoppingList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40
  }
});
