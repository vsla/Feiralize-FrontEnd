import React, { Component } from "react";
import { View, Image,TouchableHighlight, Text } from 'react-native';
import HeaderLogin from '../components/HeaderLogin'

class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <HeaderLogin/>
                <View style={style.inputContainer}>
                    <View style={style.authLoginContainer}>
                        <TouchableHighlight
                            style={style.faceButton}>
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
                        flex: 1, justifyContent: "center",
                        alignItems: "stretch"}}>
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
        margin: 40,
        marginTop: 15,
        marginBottom: 20,
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
