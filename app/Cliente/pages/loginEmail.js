import React, { Component } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import theme from '../styles/theme.style';
import HeaderLogin from '../components/HeaderLogin';
import firebase from 'firebase';
import axios from 'axios';
class LoginEmail extends Component {
  state = { email: '', password: '', error: '' }


  loginMethod() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            Alert.alert("Email existente ou senha muito curta\n Adicione letras e números.")
          })
      })
    Alert.alert("Logado com sucesso!");
    this.props.navigation.navigate('bottomNavigator')
  }
  //gaychiu@chiu.gay
  //gayzinho1234

  login = () => {
    axios.post('https://4e8e57a2.ngrok.io/client/login', {
      email: this.state.email,
      password: this.state.password
    }).then((response) => {
      console.log(response.data)
    })

    this.props.navigation.navigate('bottomNavigator')
  }
  render() {
    return (
      <View style={{ flex: 2, backgroundColor: 'white' }}>
        <HeaderLogin />
        <View style={style.inputContainer}>
          <TextInput style={style.inputStyle}
            value={this.state.email}
            onChangeText={email => this.setState({ email: email })}
            placeholder="Email"
            placeholderTextColor='black'
            keyboardType="email-address"
          />

          <TextInput style={style.inputStyle}
            placeholder="Senha"
            placeholderTextColor='black'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password: password })} />

          <TouchableOpacity
            style={style.loginButton}
            onPress={() => this.login()}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
              }}>
              Entrar </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin: 10 }}>
            <TouchableOpacity
              style={style.forgotPassButton}
              onPress={() => { }}  >
              <Text
                style={{
                  color: "orange",
                }}>
                Esqueceu a senha! </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.forgotPassButton}
              onPress={() => {this.props.navigation.navigate("SignUp")}} >
              <Text
                style={{
                  color: "orange",
                }}>
                Cadastre-se </Text>
            </TouchableOpacity>
          </View>

          <View style={{
            flex: 1, justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: "center"
          }}>
            <TouchableOpacity
              style={style.loginButton}
              onPress={() => this.props.navigation.navigate('bottomNavigator')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                }}>
                Entrar sem login
                            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.loginButton}
              onPress={() => this.props.navigation.navigate('supermarket')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                }}>
                Entrar super
                            </Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    );
  }
}
export default LoginEmail;

const style = {
  inputContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'white',
    marginHorizontal: 40
  },
  inputStyle: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#eeeeee',
  },

  loginButton: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#4fbc66',
    padding: 10
  },

  forgotPassButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}