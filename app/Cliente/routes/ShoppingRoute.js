import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import ListaProduto from '../pages/ListaProduto';
import ItemSearching from '../pages/ItemSearching'


const ShoppingRoute = createStackNavigator(
  /** 
  * Navegação das telas de compras
  * Quando o cliente for escolher os produtos à colocar no carrinho a navegação segue para ListaProduto
  **/
  {
    ListaProduto: {
      screen: ListaProduto,

    },
    ItemSearching: {
      screen: ItemSearching,
      navigationOptions: () => ({
        header: null,
      })
    },

  },
  {
    initialRouteName: 'ListaProduto'
  }
);

export default ShoppingRoute;