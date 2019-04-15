import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Pedidos from '../pages/Pedidos'


const StatusFeiraTabNav = createMaterialTopTabNavigator(
    {
        dairy:{
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'TODOS',
            }
        },
        fruit: {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'PENDENTES',
            }
        },
        vegetable: {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'EM PREPARO',
            }
        },
        bakery: {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'ENTREGA',
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'grey',
            scrollEnabled: false,
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