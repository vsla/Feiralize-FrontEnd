import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import ItemList from "../components/ItemList";

const ListaProdutoTabNav = createMaterialTopTabNavigator(
    {
        Mercearia: {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: 'Mercearia',
            }
        },
        Mercados: {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: 'Mercados',
            }
        },
        Frios: {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: 'Frios',
            }
        },
    }, {
        initialRouteName: 'Mercearia',
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'transparent',
            style: {
                backgroundColor: 'darkorange'
            },
            indicatorStyle: {
                height: 3,
                color: 'white',
            }
        }
    }
)

export default ListaProdutoTabNav;