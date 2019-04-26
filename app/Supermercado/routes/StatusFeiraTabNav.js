import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Pedidos from '../pages/Pedidos'


const StatusFeiraTabNav = createMaterialTopTabNavigator(
    {
        Pedidos:{
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'Todos',
            }
        },
        Pendentes: {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'Pendentes',
            }
        },
        'Em Preparo': {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'Em Preparo',
            }
        },
        Entrega: {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'Em Entrega',
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'grey',
            scrollEnabled: false,
            labelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
                margin: 0
              },
            style: {
                backgroundColor: 'white'
            },
            indicatorStyle: {
                height: 4,
                backgroundColor: 'green',
            },
        }
    }
);

export default StatusFeiraTabNav;