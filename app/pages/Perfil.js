import React, { Component } from 'react'
import {Text, View} from 'react-native';
import PerfilButton from '../components/PerfilButtons';

export default class Perfil extends Component{

    render(){
        return(
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <PerfilButton text='botão 1' imagePath={require('../assets/Icones/Home.png')}/>
            </View>
        );
    }
}