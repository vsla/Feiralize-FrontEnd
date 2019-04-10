import React, { Component } from "react";
import { View, Image, TextInput, TouchableHighlight, Text, Alert } from 'react-native';
import theme from '../styles/theme.style';
import HeaderLogin from '../components/HeaderLogin';
import firebase from 'firebase';

class LoginEmail extends Component {
    state = {email: '', password : '', error: ''}
    loginMethod(){
    const { email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(() => {
                    Alert.alert("Email existente ou senha muito curta\n Adicione letras e números.")
                })
        })
        Alert.alert("Logado com sucesso!");
        this.props.navigation.navigate('bottomNavigator')
        
    }
    render() {
        return (
            <View style={{ flex: 2, }}>
                <HeaderLogin/>
                <View style={style.inputContainer}>
                    <TextInput style={style.inputStyle}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email })}
                        placeholder="email@email.com"
                        placeholderTextColor='black'
                        keyboardType="email-address"
                         />

                    <TextInput style={style.inputStyle}
                        placeholder="Senha"
                        placeholderTextColor='black'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password: password })} />

                    <TouchableHighlight
                        style={style.loginButton}
                        onPress={() => this.loginMethod()}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                            }}>
                                Entrar </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={style.forgotPassButton}
                        onPress={() => this.onPress}  >
                        <Text
                            style={{
                                color: "orange",
                            }}>
                            Esqueceu a senha! </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
export default LoginEmail;

const style = {
    logoContainer: {
        flex: 2.5,
        backgroundColor: theme.BG_color,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    inputContainer: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    inputStyle: {
        margin: 40,
        marginTop:15,
        marginBottom: 10,
        backgroundColor: '#eeeeee',
    },

    loginButton: {
        alignItems: 'center',
        margin: 40,
        marginTop: 15,
        marginBottom: 20,
        backgroundColor: '#4fbc66',
        padding: 10
    },

    forgotPassButton: {
        alignItems: 'flex-start',
        margin: 10,
        marginTop: 0,
        marginBottom: 15,
        padding: 10
    }
}