import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet
} from 'react-native';

export default class Home extends Component {
  state = {};

  // If this remains empty we should make it a pure function component
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the home page.</Text>
        <Button
          title="go to AR!"
          onPress={() => {
            navigation.navigate('ARScreen');
          }}
        />
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
