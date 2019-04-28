import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Pedidos from '../pages/Pedidos'


const StatusFeiraTabNav = createMaterialTopTabNavigator(
    {
        'TODOS':{
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'TODOS',
            }
        },
        'PENDENTE': {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'PENDENTES',
            }
        },
        'EM PREPARO': {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'EM PREPARO',
            }
        },
        'EM ENTREGA': {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'EM ENTREGA',
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