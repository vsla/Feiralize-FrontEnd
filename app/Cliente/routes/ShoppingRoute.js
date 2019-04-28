import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import ListaProduto from '../pages/ListaProduto';

import Supermercado from '../pages/Supermercado';
import Pagamento from '../pages/Pagamento';
import BuyNavigator from './BuyNavigator';
import ItemSearching from '../pages/ItemSearching'


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
        ItemSearching: {
            screen: ItemSearching,
                navigationOptions: () => ({
                    header: null,
                })
        },
        Compra:{
            screen: BuyNavigator,
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