import React, { Component } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity } from 'react-native';
import StatusFeiraTabNav from './StatusFeiraTabNav'
import {Icon} from "react-native-elements";

class PagInicial extends Component {
    render() {
        return (
            <View style={style.viewStyle}>
                < View style = {style.headerStyle} >
                    < TouchableOpacity style={{marginLeft: 20, flexDirection: 'row'}}>
                        <Icon
                            name = 'menu'
                            color = 'grey'
                            size = {20}
                        />
                        <Text style={style.textStyle}>Pedidos</Text>
                    </TouchableOpacity>
                </View>
                <StatusFeiraTabNav/>
            </View>
        );
    }
}
export default PagInicial;
const style = {
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerStyle:{
        flex: 0.10, 
        flexDirection: "row", 
        backgroundColor: 'white', 
        justifyContent: "space-between", 
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        color: 'grey',
        marginRight: 10,
    }
}