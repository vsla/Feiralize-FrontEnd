import React, { Component } from "react";
import { View, Image,TouchableHighlight, Text, Alert } from 'react-native';
import HeaderLogin from '../components/HeaderLogin'


class Login extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={{ flex: 1, }}>
                <HeaderLogin/>
                <View style={style.inputContainer}>
                    <View style={style.authLoginContainer}>
                        <TouchableHighlight
                            style={style.faceButton}
                            onPress={() => Alert.alert("Não implementado!")}>
                            <View>
                                <Image
                                    source={require(
                                        '../assets/Icones/facebook_square.png')} 
                                    style={style.logoImage} />
                                <Text style={{ color: "white" }}>Entrar com facebook</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={style.emailButton}
                            onPress={() => this.props.navigation.navigate('loginEmail')}>
                            <View>
                                <Image
                                    source={require(
                                        '../assets/Icones/email.png')} 
                                    style={style.logoImage}/>
                                <Text> Entrar com email</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                    <View style={{
                        flex: 1, justifyContent: 'space-around',
                        flexDirection:'row',
                        alignItems: "center"}}>
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
    authLoginContainer:{
        flex:1.5,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    faceButton:{
        flex:2,
        backgroundColor:"#3B5998",
        justifyContent:"center",
        alignItems: "center"
    },
    emailButton:{
        flex:2,
        backgroundColor:"#f5f5f5",
        justifyContent: "center",
        alignItems:"center"
    },
    loginButton: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#6db969ff',
        padding: 10,
    },
    logoImage:{
        alignSelf:"center",
        width:40,
        height:40, 
        marginBottom:10,
    }
 }
