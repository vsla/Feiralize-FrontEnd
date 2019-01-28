import React, { Component } from 'react'
import {Text, View, Alert, StyleSheet, Image} from 'react-native';
import PerfilButton from '../components/PerfilButtons';
import themeStyle from "../styles/theme.style";

export default class Perfil extends Component{

    render(){
        return(
            <View style={{ flex: 1}}>
                <View style={style.OrangeContainer}>
                    <View style={{marginHorizontal:30, marginBottom:10, marginTop:20}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start'}}>
                            <Image
                                source={{ uri: 'https://bit.ly/2WqraTd'}}
                                style={style.perfilImage}
                            />
                            <PerfilButton
                                text='Sair'
                                imagePath={require('../assets/Icones/Home.png')}
                                onPress={() => Alert.alert("Não implementado")}
                                textStyle={style.whiteText}
                            />
                        </View>
                        <View>
                            <Text style= {style.nameStyle}
                            >Chiu the China</Text>
                            <Text style={style.emailStyle}
                            >ChiuGatinho@gmail.com</Text>
                        </View>
                    </View>
                    
                    <View style={{marginHorizontal:30, marginBottom:10, marginTop:20}}>
                        <PerfilButton 
                            text='Cartões' 
                            imagePath={require('../assets/Icones/Home.png')}
                            onPress ={() => Alert.alert("Não implementado")}
                            textStyle={style.whiteText}
                        />
                        <PerfilButton
                            text='Dados Pessoais'
                            imagePath={require('../assets/Icones/Home.png')}
                            onPress={() => Alert.alert("Não implementado")}
                            textStyle={style.whiteText}
                        />
                        <PerfilButton
                            text='Endereço de entrega'
                            imagePath={require('../assets/Icones/Home.png')}
                            onPress={() => Alert.alert("Não implementado")}
                            textStyle={style.whiteText}
                        />
                        <PerfilButton
                            text='Configurações'
                            imagePath={require('../assets/Icones/Home.png')}
                            onPress={() => Alert.alert("Não implementado")}
                            textStyle={style.whiteText}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginHorizontal:30}}>
                    <PerfilButton
                        text='Ajuda'
                        imagePath={require('../assets/Icones/Home.png')}
                        onPress={() => Alert.alert("Não implementado")}
                        textStyle={style.orangeText}
                    />
                    <PerfilButton
                        text='Fale Conosco'
                        imagePath={require('../assets/Icones/Home.png')}
                        onPress={() => Alert.alert("Não implementado")}
                        textStyle={style.orangeText}
                    />
                    <PerfilButton
                        text='Sobre'
                        imagePath={require('../assets/Icones/Home.png')}
                        onPress={() => Alert.alert("Não implementado")}
                        textStyle={style.orangeText}
                    />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    OrangeContainer:{
        flex: 2.2, 
        backgroundColor: themeStyle.BG_color, 
        justifyContent: 'center',
    },
    perfilImage:{
        height:75,
        width:75,
        borderRadius: 100,
        borderWidth: 1,
        marginBottom:10
    },
    nameStyle:{
        color:'white',
        fontWeight:'bold',
        fontSize:27
    },
    emailStyle:{
        color:'white',
        fontSize:12
    },
    whiteText: {
        color: 'white',
        marginLeft: 10,
        fontSize:18,
    },
    orangeText:{
        color: themeStyle.BG_color,
        marginLeft: 10,
        fontSize: 18,
    }
})