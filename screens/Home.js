import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet
} from 'react-native';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import { firestoreConfig } from '../config/index';

// const settings = { timestampsInSnapshots: true };

// firebase.initializeApp(firestoreConfig);
// firebase.firestore().settings(settings);
// const db = firebase.firestore();

export default class Home extends Component {
  state = {
    // plantsUrlArray: []
  };

  // componentDidMount = () => {
  //   const docRef = db.collection('plants').doc('lavender');

  //   docRef
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         console.error('Document data:', doc.data());
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.error('No such document!');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error getting document:', error);
  //     });
  // };

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
