import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ShoppingRoute from './ShoppingRoute';
import Perfil from '../pages/Perfil';
import Inicio from '../pages/Inicio';
import Historico from '../pages/Historico';

const BottomNavigator = createBottomTabNavigator(
    /**
     * Aqui é a navegação dentro do aplicativo já logado.
     * Renderiza a tabNavigator que fica na parte de baixo.
    **/
    {
        Inicio: {
            screen: Inicio,
            navigationOptions: () => ({
                title: "Início",
                
            }),    
        },
        ShoppingRoute: {
            screen: ShoppingRoute,
            navigationOptions:() => ({
                title:"Shopping"
            }),           
        },
        historico: {
            screen: Historico,
            navigationOptions: () => ({
                title: "Histórico",
                
            }),    
        },
        perfil: {
            screen:Perfil,
            navigationOptions: () => ({
                title: "Perfil"
            }),    
        },
    },
    {
        initialRouteName: "Inicio",
        tabBarOptions: {
            showIcon: true,
            style:{
                
            }
        },
    }
)
export default BottomNavigator;