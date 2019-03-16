import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Alert } from 'react-native';
import theme from '../styles/theme.style';

class FeiraButton extends Component{    
    render() {
        if (this.props.linkTo != "") {
            return (
                // Ainda falta colocar o link para a tela desejada
                <TouchableOpacity
                    style={style.buttonStyle}
                    onPress={() => {}}
                >
                    <Text style={style.textButton}>{this.props.text}</Text>
                </TouchableOpacity> 
            )
        } else {
            return (
                <TouchableOpacity
                    style = {style.buttonStyle}
                    onPress={() => Alert.alert("Não implementado!") } >
                    <Text style={style.textButton}>{this.props.text}</Text>
                </TouchableOpacity>
            ) 
        }
    }
}
export default class Inicio extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center",  alignItems: "stretch", backgroundColor:"white" }}>
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start", margin: 15, marginBottom:0, backgroundColor: "white" }}>
                    <Text style={style.textStyle}>Crie uma feira!</Text>
                </View>
                <View style={{ flex: 3, justifyContent: "space-between", alignItems: "stretch", margin: 15, backgroundColor: 'white'}}>
                    <FeiraButton text="Tire uma foto da lista com a câmera" linkTo='' />
                    <FeiraButton text="Escaneie o QR code de nota fiscal" linkTo='' />
                    <FeiraButton text="Ver categorias de produtos" linkTo='' />
                </View>
            </View>
        )
    }
}

const style ={
    buttonStyle:{
        backgroundColor:"#efefef",
        flex:2,
        marginTop:15,
        justifyContent:'center'
        
    },
    textButton:{
        fontSize: 18,
        textAlign: "center",
    },
    textStyle:{
        textAlign:'left',
        color: theme.BG_color,
        fontSize: 40,
        
        marginLeft:0,
        backgroundColor:'white'
    }
}