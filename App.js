import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import AR from './screens/AR';
import AboutPage from './screens/About';

export default class App extends Component {
  state = {};

  render() {
    return <SwitchNavContainer />;
  }
}

const SwitchNav = createSwitchNavigator({
  HomeScreen: Home,
  ARScreen: AR,
  About: AboutPage
});

const SwitchNavContainer = createAppContainer(SwitchNav);
