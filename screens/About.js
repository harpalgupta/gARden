import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableHighlight, Image
} from 'react-native';
import ShoppingList from '../js/components/ShoppingList';

const backButton = require('../js/res/backButton.png');

export default class Home extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.backView}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate('HomeScreen')}
            underlayColor="#00000000"
          >
            <Image style={styles.icon} source={backButton} />
          </TouchableHighlight>
        </View>
        <View style={styles.shoppingListView}>
          <Text style={styles.text}>Your wishlist</Text>
          <ShoppingList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8FBB99'
  },
  text: {
    fontSize: 40
  },
  button: {
    backgroundColor: 'rgba(10,10,10,0)',
    height: 50,
    width: 50
  },
  icon: {
    width: 60,
    height: 60
  },
  backView: {
    flex: 1
  },
  shoppingListView: {
    flex: 4
  }
});
