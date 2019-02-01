import React, { Component } from 'react'
import { Text, View } from 'react-native';
import SuperCard from '../components/SuperCard'

export default class Supermercado extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent:"center"}}>
                <SuperCard/>
            </View>
        )
    }
}