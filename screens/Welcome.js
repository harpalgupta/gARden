import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,

  TouchableOpacity,
  Image,

  ImageBackground
} from 'react-native';
// import { Font } from 'expo';
import { NavigationEvents, withNavigationFocus } from 'react-navigation';

const image1 = require('../assets/splash.jpg');

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  async componentDidMount() {
    // await Font.loadAsync({
    //   'open-sans-bold': require('./assets/Charm-Regular.ttf')
    // });
    // this.setState({ fontLoaded: true });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={image1}
        >
          <View style={styles.imCover}>

            <View style={styles.imCover}>
              <Text
                style={{
                  // fontFamily: 'open-sans-bold',
                  fontSize: 80,
                  color: 'white',
                  marginBottom: 10
                }}

              >
                  gARden
              </Text>
              <TouchableOpacity
                style={[
                  styles.buttonContainer,
                  styles.loginButton,
                  styles.buttonColor
                ]}
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={[styles.loginText, styles.buttonColor]}>
                    Sign up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => navigation.navigate('SignIn')}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
              <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mondayw1.appspot.com/o/eberhard-grossgasteiger-338314-unsplash.jpg?alt=media' }} style={{ height: 50, width: 50 }} />
              <NavigationEvents>
                <NavigationEvents />
              </NavigationEvents>
            </View>

          </View>
        </ImageBackground>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
  imCover: {
    backgroundColor: 'rgba(0, 0, 0, 0.256)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent'
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19
  },
  loginText: {
    color: 'white'
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',

    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  },
  buttonColor: {
    backgroundColor: 'red'
  }
});

export default withNavigationFocus(Login);
