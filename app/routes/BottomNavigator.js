import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ShoppingRoute from './ShoppingRoute';
import Perfil from '../pages/Perfil';
import Inicio from '../pages/Inicio';
import Historico from '../pages/Historico';
import ReuseIcon from '../components/ReuseIcon';


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
                tabBarIcon: () => {
                    return (
                        <ReuseIcon name={'home'} size={25} color={'black'} />
                    )
                }     
            }),    
        },
        ShoppingRoute: {
            screen: ShoppingRoute,
            navigationOptions:() => ({
                title:"Shopping",
                tabBarIcon: () => {
                    return (
                        <ReuseIcon name={'cart'} size={25} color={'black'} />
                    )
                }     
            }),           
        },
        Historico: {
            screen: Historico,
            navigationOptions: () => ({
                title: "Histórico",
                tabBarIcon: () => {
                    return (
                        <ReuseIcon name={'timer'} size={25} color={'black'} />
                    )
                }  
            }),    
        },
        Perfil: {
            screen:Perfil,
            navigationOptions: () => ({
                title: "Perfil",
                tabBarIcon: () => {
                    return (
                        <ReuseIcon name={'person'} size={25} color={'black'} />
                    )
                }     
            }),    
        },
    },
    {
        
    }
)
export default BottomNavigator;