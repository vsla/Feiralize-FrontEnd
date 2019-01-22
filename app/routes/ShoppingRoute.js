import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import ListaProduto from '../pages/ListaProduto';
import Carrinho from '../pages/Carrinho';
import Supermercado from '../pages/Supermercado';
import Pagamento from '../pages/Pagamento';

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

        Carrinho: {
            screen: Carrinho,
            navigationOptions:() => ({
                header: null,
            })
        },
        
        Supermercado: {
            screen: Supermercado,
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
        initialRouteName: 'Carrinho'
    }
);

export default ShoppingRoute ;