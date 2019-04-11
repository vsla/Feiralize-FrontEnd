import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import testes from '../pages/testes'


const StatusFeiraTabNav = createMaterialTopTabNavigator(
    {
        dairy:{
            screen: testes,
            navigationOptions: {
                tabBarLabel: 'todos',
            }
        },
        fruit: {
            screen: testes,
            navigationOptions: {
                tabBarLabel: 'PENDENTES',
            }
        },
        vegetable: {
            screen: testes,
            navigationOptions: {
                tabBarLabel: 'EM PREPARO',
            }
        },
        bakery: {
            screen: testes,
            navigationOptions: {
                tabBarLabel: 'ENTREGA',
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'grey',
            scrollEnabled: true,
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