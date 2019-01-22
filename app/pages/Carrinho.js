import React, { Component } from "react";
import { View, TouchableHighlight, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation' 
import Supermercado from './Supermercado'
import DropMarca from '../components/DropDownMarca'
import DropQuatidade from '../components/DropDownMarca'

class carrinho extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={style.produtosContainer}>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "stretch"}}>
                        <TouchableHighlight
                            style={style.ProdutosButton}
                            onPress={() => this.props.navigation.navigate('ListaProduto')}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                }}>
                                    + Adicionar produtos
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <AppTabNavigator/>
            </SafeAreaView>
        );
    }
}
export default carrinho;

class ListaDeProdutos extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text>LISTA</Text>
            </View>
        );
    }
}

const AppTabNavigator = createMaterialTopTabNavigator({
    Produtos: { screen: ListaDeProdutos,
        navigationOptions:{
            tabBarLabel:'LISTA',
        }    
    },
    Mercados: { screen: Supermercado,
        navigationOptions:{
            tabBarLabel:'COMPRAR',
        }    
    }
},{
    initialRouteName: 'Produtos',
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'transparent',
        style: {
            backgroundColor: 'darkorange'
        },
        indicatorStyle: {
            height: 3,
            color: 'white',
        }
    }
    
    })

const style = {

    produtosContainer: {
        justifyContent: 'center',
        flex: 0.3,
        alignItems: 'stretch',
        backgroundColor: 'darkorange',
    },
    ProdutosButton: {
        borderLeftWidth: 20,
        borderLeftColor: 'darkorange',
        backgroundColor: 'darkorange'
    },
 }
