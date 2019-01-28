import React, { Component } from "react";
import { View, Text, TextInput,Image } from 'react-native';
import ItemList from "../components/ItemList";
import ListaProdutoTabNav from "../routes/ListaProdutoNav";

class ListaProduto extends Component {
    render() {
        return (
            <View style={style.viewStyle}>
                <View style={{flex:0.15}}>
                    <View style={style.inputStyle}>
                        <TextInput style={style.textStyle}
                            placeholder="Buscar Item !!"
                            placeholderTextColor='white'
                        />
                        < Image
                            source={require('../assets/Icones/lupa1.png')}
                            style={style.imageStyle}
                        />
                    </View>
                </View>
                <ListaProdutoTabNav/>
            </View>
        );
    }
}
export default ListaProduto
const style = {
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputStyle: {
        flex:2,
        flexDirection: 'row',
        backgroundColor: 'darkorange',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        height: 85,
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        marginRight: 10,
        paddingTop: 30,
    },
    imageStyle: {
        width: 30,
        height: 30,
        marginRight: 20,
        marginTop: 25,
    }
}