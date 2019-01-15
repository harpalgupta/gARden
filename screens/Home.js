import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet
} from 'react-native';

export default class Home extends Component {
  state = {
    // plantsUrlArray: []
  };

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
        <Button
          title="go to About!"
          onPress={() => {
            navigation.navigate('About');
          }}
          style={styles.button}
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
  },
  button: {
    border: '1px solid green'
  }
});
