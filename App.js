import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import AR from './screens/AR';
import AboutPage from './screens/About';
import Welcome from './screens/Welcome';
import SignUpComp from './screens/SignUp';


export default class App extends Component {
  state = {};

  render() {
    return <SwitchNavContainer />;
  }
}
// fdfdfsf
const SwitchNav = createSwitchNavigator({
  WelcomeScreen: Welcome,
  HomeScreen: Home,
  ARScreen: AR,
  About: AboutPage,
  SignUp: SignUpComp
});

const SwitchNavContainer = createAppContainer(SwitchNav);
