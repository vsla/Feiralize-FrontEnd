import React, { Component } from 'react'
import {Text, View, Alert, StyleSheet, Image} from 'react-native';
import PerfilButton from '../components/PerfilButtons';
import themeStyle from "../styles/theme.style";

export default class Perfil extends Component{

    render(){
        return(
            <View style={{ flex: 1}}>
                <View style={style.OrangeContainer}>
                    <View style={{marginHorizontal:35, marginBottom:10, marginTop:20}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start'}}>
                            <Image
                                source={{ uri: 'https://bit.ly/2WqraTd'}}
                                style={style.perfilImage}
                            />
                            <PerfilButton
                                text='Sair'
                                name = 'log-out'
                                color='white'
                                onPress={() => Alert.alert("Não implementado")}
                                textStyle={{color: 'white',marginLeft: 8,fontSize: 18,}}
                            />
                        </View>
                        <View>
                            <Text style= {style.nameStyle}
                            >Chiu the China</Text>
                            <Text style={style.emailStyle}
                            >ChiuGatinho@gmail.com</Text>
                        </View>
                    </View>
                    
                    <View style={{marginHorizontal:35, marginBottom:10, marginTop:20}}>
                        <PerfilButton
                            text='Cartões'
                            name='wallet'
                            color='white'
                            onPress={() => Alert.alert("Não implementado")}
                            textStyle={style.whiteText}
                        />
                        <PerfilButton
                            text='Dados Pessoais'
                            name='lock'
                            color='white'
                            onPress={() => Alert.alert("Não implementado")}
                            textStyle={style.whiteText}
                        />
                        <PerfilButton
                            text='Endereço de entrega'
                            name='pin'
                            color='white'
                            onPress={() => Alert.alert("Não implementado")}
                            textStyle={style.whiteText}
                        />
                        <PerfilButton
                            text='Configurações'
                            name='cog'
                            color='white'
                            onPress={() => Alert.alert("Não implementado")}
                            textStyle={style.whiteText}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginHorizontal:30, }}>
                    <PerfilButton
                        text='Ajuda'
                        name='help-circle-outline'
                        color={themeStyle.BG_color}
                        onPress={() => Alert.alert("Não implementado")}
                        textStyle={style.orangeText}
                    />
                    <PerfilButton
                        text='Fale Conosco'
                        name='chatboxes'
                        color={themeStyle.BG_color}
                        onPress={() => Alert.alert("Não implementado")}
                        textStyle={style.orangeText}
                    />
                    <PerfilButton
                        text='Sobre'
                        name='information-circle-outline'
                        color={themeStyle.BG_color}
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
        marginLeft: 20,
        fontSize:18,
    },
    orangeText:{
        color: themeStyle.BG_color,
        marginLeft: 20,
        fontSize: 18,
    }
})