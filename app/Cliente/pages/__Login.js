import React, { Component } from "react";
import { View, Image, TouchableHighlight, Text, Alert } from 'react-native';
import HeaderLogin from '../components/HeaderLogin'


class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <HeaderLogin />
        <View style={style.inputContainer}>
          <View style={{
            flex: 1, justifyContent: 'space-around', alignItems: "center"
          }}>
            <TouchableHighlight
              style={style.loginButton}
              onPress={() => this.props.navigation.navigate('loginEmail')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                }}>
                Entrar com email
                            </Text>
            </TouchableHighlight>
          </View>

          <View style={{
            flex: 1, justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: "center"
          }}>
            <TouchableHighlight
              style={style.loginButton}
              onPress={() => this.props.navigation.navigate('bottomNavigator')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                }}>
                Entrar sem login
                            </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={style.loginButton}
              onPress={() => this.props.navigation.navigate('supermarket')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                }}>
                Entrar super
                            </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
export default Login;

const style = {

  inputContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  authLoginContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  faceButton: {
    flex: 2,
    backgroundColor: "#3B5998",
    justifyContent: "center",
    alignItems: "center"
  },
  emailButton: {
    flex: 2,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6db969ff',
    padding: 10,
    borderRadius: 50
  },
  logoImage: {
    alignSelf: "center",
    width: 40,
    height: 40,
    marginBottom: 10,
  }
}
