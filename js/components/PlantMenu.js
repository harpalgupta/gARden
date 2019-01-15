import React, { Component } from 'react';
import {
  // AppRegistry,
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';
import FadeInView from './FadeInView';
import InfoCard from './InfoCard';

import PlantCard from './PlantCard';
import api from '../api';

class PlantMenu extends Component {
  state = {
    data: [
      // { key: 'lavender' }, { key: 'rose' }
    ],
    info: null,
    isMenuLoading: false
  };

  componentDidMount = () => {
    this.makeIsMenuLoadingTrue();
    this.fetchMenuItems();
  };

  fetchMenuItems = () => {
    api.getMenuItems().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { data } = this.state;
        this.setState({ data: [...data, { key: doc.id }] }, () => {
          this.makeIsMenuLoadingFalse();
        });
      });
    });
  };

  toggleInfoPage = (plantName) => {
    this.setState({ info: plantName });
  };

  makeIsMenuLoadingTrue = () => {
    const { isMenuLoading } = this.state;
    if (isMenuLoading !== true) {
      this.setState({
        isMenuLoading: true
      });
    }
  };

  makeIsMenuLoadingFalse = () => {
    const { isMenuLoading } = this.state;
    if (isMenuLoading !== false) {
      this.setState({
        isMenuLoading: false
      });
    }
  };

  render() {
    const { addPlantToRenderList } = this.props;
    const { data, info, isMenuLoading } = this.state;
    return (
      <View style={styles.menu}>
        <FadeInView
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: 'powderblue'
          }}
        >
          {isMenuLoading && (
            <View>
              <Text>lOADING</Text>
            </View>
          )}
          {!info ? (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <PlantCard
                  plantName={item.key}
                  toggleInfoPage={this.toggleInfoPage}
                  addPlantToRenderList={addPlantToRenderList}
                />
              )}
            />
          ) : (
            <InfoCard plantName={info} toggleInfoPage={this.toggleInfoPage} />
          )}
        </FadeInView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'transparent',
    width: 200,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    right: -100,
    height: '100%'
  }
});

export default PlantMenu;
