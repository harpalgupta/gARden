import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import AR from './screens/AR';
import AboutPage from './screens/About';
import Welcome from './screens/Welcome';
import SignUpComp from './screens/SignUp';
import SignInComp from './screens/SIgnIn';

export default class App extends Component {
  state = {};

  render() {
    return <SwitchNavContainer />;
  }
}
// fdfdfsf
const SwitchNav = createSwitchNavigator({
  HomeScreen: Home,
  WelcomeScreen: Welcome,
  ARScreen: AR,
  About: AboutPage,
  SignUp: SignUpComp,
  SignIn: SignInComp
});

const SwitchNavContainer = createAppContainer(SwitchNav);
