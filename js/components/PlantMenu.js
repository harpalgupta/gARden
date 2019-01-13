import React from 'react';
import {
  // AppRegistry,
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import PlantCard from './PlantCard';
// import { firebase } from '../../config/index';


class PlantMenu extends React.Component {
  state = {
    data: [{ key: 'lavender' }, { key: 'rose' }]
  }

componentDidMount = async () => {
  // const db = firebase.firestore();
  // const docRef = db.collection('plants').doc('lavender');

  // docRef.get().then((doc) => {
  //   if (doc.exists) {
  //     const {
  //       objAttr: { obj, texture, scale }

  //     } = doc.data();
  //     console.log(doc.data());
  //   }
  // });
  // db.collection('plants').valueChanges().map(document => document((a) => {
  //   const data = a.payload.doc.data();// Here is your content
  //   const id = a.payload.doc.id;// Here is the key of your document
  //   return { id, ...data };
  // }));
  // db.getCollections().then((querysnapshot) => { querysnapshot.forEach((collection) =>
  // { console.log('<<<', collection.id); }); });
  // const events = await firebase.firestore().collection('plants').get()
  //   .then((querySnapshot) => {
  //     querySnapshot.docs.map((doc, index) => {
  //       console.log(`LOG${index}`, doc.data());
  //       return doc.data();
  //     });
  //     console.log(events);
  //   });
  this.setState({ data: [] });
}

render() {
  const { addPlantToRenderList } = this.props;
  const { data } = this.state;
  return (
    <View style={styles.menu}>
      <FlatList
        // data={[{ key: 'lavender' }, { key: 'rose' }]}
        data={data}
        renderItem={({ item }) => (
          <PlantCard plantName={item.key} addPlantToRenderList={addPlantToRenderList} />
        )}
      />
    </View>
  );
}
}
const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'green',
    width: 200,
    alignItems: 'center'
  }
});

export default PlantMenu;
