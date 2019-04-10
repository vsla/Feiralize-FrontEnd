import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation' 
import {Provider} from 'react-redux'

import Supermercado from './Supermercado'
import CartScreen from './Carrinho'
import BuyNavigator from "../routes/BuyNavigator";

class Compra extends Component {
    //Tela que junta o component de adicionar produto e o navegador de carrinho
    //Tem o botão de adicionar produto
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={style.produtosContainer}>
                    <View style={{
                        justifyContent: "center",}}>
                        <TouchableOpacity
                            style={style.ProdutosButton}
                            onPress={() => this.props.navigation.navigate('ListaProduto')}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                }}>
                                   Adicionar produtos
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
        alignItems:'center',
        flex: 0.1,
        backgroundColor: 'darkorange',
    },
    ProdutosButton: {

        backgroundColor: 'transparent'
    },
 }
