import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import ItemList from "../components/ItemList";
import data from "../assets/data/products.json";

const ListaProdutoTabNav = createMaterialTopTabNavigator(
    {
        dairy:{
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: 'dairy',
            }
        },
        fruit: {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: 'fruit',
            }
        },
        vegetable: {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: 'vegetable',
            }
        },
        bakery: {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: 'bakery',
            }
        },
        vegan: {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: 'vegan',
            }
        }, meat: {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: 'meat',
            }
        },
    },
    {
        lazy: true,
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#e1e1e1',
            scrollEnabled: true,
            style: {
                backgroundColor: 'darkorange'
            },
            indicatorStyle: {
                height: 3,
                color: 'white',
            }
        }
    }
);

export default ListaProdutoTabNav;
/*
function get_categories(item, itemList) {
    var categories = [... new Set(item.map((item) => item.type))];
    var route = {};
    for (var index in categories){
        route[categories[index]] = {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: categories[index],
            }
        };
    }
    return route;
}
*/