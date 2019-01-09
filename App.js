import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import AR from './screens/AR';

export default class App extends Component {
  state = {};

  render() {
    return <SwitchNavContainer />;
  }
}

const SwitchNav = createSwitchNavigator({
  HomeScreen: Home,
  ARScreen: AR
});

const SwitchNavContainer = createAppContainer(SwitchNav);
