import React, { Component } from 'react'
import { Text, View } from 'react-native';

export default class Supermercado extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{ flex: 1, alignItems: "center", justifyContent:"center"}}>
                    <Text>SUPERMERCADOS</Text>
                </View>
            </View>
            
        )
    }
}