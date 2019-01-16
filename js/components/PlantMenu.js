import React, { Component } from 'react';
import {
  // AppRegistry,
  View,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';
import FadeInView from './FadeInView';
import InfoCard from './InfoCard';

import PlantCard from './PlantCard';
import api from '../api';

const wateringCanGif = require('../res/wateringCanGif.gif');

class PlantMenu extends Component {
  state = {
    data: [
      // { key: 'lavender' }, { key: 'rose' }
    ],
    info: null,
    isMenuLoading: false,
    iconUrl: null
  };

  componentDidMount = () => {
    this.makeIsMenuLoadingTrue();
    this.fetchMenuItems();
  };

  fetchMenuItems = () => {
    api.getMenuItems().then((doc) => {
      if (doc.exists) {
        const { menuArray } = doc.data();
        this.setState({ data: menuArray }, () => {
          this.makeIsMenuLoadingFalse();
        });
      } else {
        // console.log('file request unsuccessful');
      }
    });
  };

  toggleInfoPage = (plantName, icon) => {
    this.setState({ info: plantName, iconUrl: icon });
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
    const {
      data, info, isMenuLoading, iconUrl
    } = this.state;
    return (
      <View style={styles.menu}>
        <FadeInView
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 1,
            borderBottomLeftRadius: 1,
            paddingLeft: 5,
            backgroundColor: '#FAE1DF'
          }}
        >
          {isMenuLoading && (
            <View style={styles.loadingScreen}>
              <Image source={wateringCanGif} style={styles.loadingImg} />
            </View>
          )}
          {!info ? (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <PlantCard
                  plantName={item.name}
                  icon={item.icon}
                  toggleInfoPage={this.toggleInfoPage}
                  addPlantToRenderList={addPlantToRenderList}
                />
              )}
            />
          ) : (
            <InfoCard plantName={info} toggleInfoPage={this.toggleInfoPage} icon={iconUrl} />
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
  },
  loadingScreen: {
    backgroundColor: 'rgba(150,150,150,0.5)',
    position: 'absolute',
    flex: 1,
    zIndex: 1,
    justifyContent: 'center'
  },
  loadingImg: {
    height: '40%',
    width: '100%',
    marginLeft: 10,
    marginRight: 10
  }
});

export default PlantMenu;
