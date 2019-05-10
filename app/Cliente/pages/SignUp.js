import React, { Component } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import theme from '../styles/theme.style';
import HeaderLogin from '../components/HeaderLogin';
import firebase from 'firebase';

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = { 
      firstName: '',
      secondName:'',
      email: '', 
      password: '', 
      error: '',

    }
  }

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

  render() {
    return (
      <View style={{ flex: 2, backgroundColor: 'white' }}>
        <HeaderLogin />
        <View style={style.inputContainer}>
          <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}} >
            <TextInput style={style.inputStyle1}
              value={this.state.email}
              onChangeText={name => this.setState({ firstName: name })}
              placeholder="Nome"
              placeholderTextColor='black'
              keyboardType='default'
            />    
            <TextInput style={style.inputStyle1}
              value={this.state.email}
              onChangeText={LastName => this.setState({ LastName: LastName })}
              placeholder="Sobrenome"
              placeholderTextColor='black'
              keyboardType='default'
            />        
          </View>
          <TextInput style={style.inputStyle2}
            value={this.state.email}
            onChangeText={email => this.setState({ email: email })}
            placeholder="email@email.com"
            placeholderTextColor='black'
            keyboardType="email-address"
          />

          <TextInput style={style.inputStyle2}
            placeholder="Senha"
            placeholderTextColor='black'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password: password })} />

          <TouchableOpacity
            style={style.loginButton}
            onPress={() => this.loginMethod()}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
              }}>
              Cadastrar </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SignUp;

const style = {
  inputContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'white',
    marginHorizontal: 40
  },
  inputStyle1: {
    flex: 1,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#eeeeee',
    marginHorizontal:10,
    textAlign:'center'
  },
  inputStyle2:{
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#eeeeee',
    textAlign: 'center'
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