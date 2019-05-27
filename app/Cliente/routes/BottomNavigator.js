import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import ShoppingRoute from './ShoppingRoute';
//import Perfil from '../pages/Perfil';
import PerfilTemp from '../pages/PerfilTemp';
import Inicio from '../pages/Inicio';
import Historico from '../pages/Historico';
import ReuseIcon from '../components/ReuseIcon';
import BuyNavigator from './BuyNavigator';
import Acompanhe from '../pages/Acompanhe';


const BottomNavigator = createBottomTabNavigator(
  /**
   * Aqui é a navegação dentro do aplicativo já logado.
   * Renderiza a tabNavigator que fica na parte de baixo.
  **/
  {
    
    Inicio: {
        screen: Inicio,
        navigationOptions: () => ({
            title: 'Início',
            tabBarIcon: () => (
                    <ReuseIcon name={'home'} size={25} color={'gray'} />
                )     
        }),    
    },
    ShoppingRoute: {
      screen: ShoppingRoute,
      navigationOptions: () => ({
        title: 'Produtos',
        tabBarIcon: () => (
            <ReuseIcon name={'pizza'} size={25} color={'gray'} />
          )
      }),
    },
    cart: {
      screen: BuyNavigator,
      navigationOptions: () => ({
        title: 'carrinho',
        tabBarIcon: () => (
            <ReuseIcon name={'cart'} size={25} color={'gray'} />
          )
      }),
    },
    Historico: {
      screen: Historico,
      navigationOptions: () => ({
        title: 'Histórico',
        tabBarIcon: () => (
            <ReuseIcon name={'timer'} size={25} color={'gray'} />
          )
      }),
    },
    Perfil: {
      screen: PerfilTemp,
      navigationOptions: () => ({
        title: 'Perfil',
        tabBarIcon: () => (
            <ReuseIcon name={'person'} size={25} color={'gray'} />
          )
      }),
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 13,
        paddingTop: 15
      },
      tabStyle: {
        paddingTop: 25
      },
      activeTintColor: 'darkorange',
      inactiveTintColor: 'gray'
    }
  }
);
export default BottomNavigator;
