import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import ListaProduto from '../pages/ListaProduto';
import Compra from '../pages/Compra';
import Supermercado from '../pages/Supermercado';
import Pagamento from '../pages/Pagamento';
import BuyNavigator from './BuyNavigator';

const ShoppingRoute = createStackNavigator(
    /** 
    * Navegação das telas de compras
    * Quando o cliente for escolher os produtos à colocar no carrinho a navegação segue para ListaProduto
    **/
  {
        ListaProduto: {
            screen: ListaProduto,
                navigationOptions: () => ({
                    header: null,
                })
        },
        NavegadorCompra:{
            screen: BuyNavigator,
            navigationOptions: () => ({
                
            })
        },
        Compra:{
            screen: Compra,
            navigationOptions: () => ({
                header: null,
            })
        },
        Pagamento: {
            screen: Pagamento,
            navigationOptions: () => ({
                header: null,
            })
        },
    },
    {
        initialRouteName: 'Compra'
    }
);

export default ShoppingRoute ;