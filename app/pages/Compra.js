import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation' 
import {Provider} from 'react-redux'
import store from '../redux'

import Supermercado from './Supermercado'
import CartScreen from './Carrinho'
import BuyNavigator from "../routes/BuyNavigator";



class Compra extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={style.produtosContainer}>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "stretch"}}>
                        <TouchableOpacity
                            style={style.ProdutosButton}
                            onPress={() => this.props.navigation.navigate('ListaProduto')}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                }}>
                                    + Adicionar produtos
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <BuyNavigator screenProps={this.props.navigation}/>
            </View>
        );
    }
}
export default Compra;



const style = {

    produtosContainer: {
        justifyContent: 'center',
        flex: 0.18,
        alignItems: 'stretch',
        backgroundColor: 'darkorange',
    },
    ProdutosButton: {
        borderLeftWidth: 20,
        borderLeftColor: 'darkorange',
        backgroundColor: 'darkorange'
    },
 }
