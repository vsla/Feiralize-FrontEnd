import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import ItemList from "../components/ItemList";
import data from "../assets/data/products.json"

const ListaProdutoTabNav = createMaterialTopTabNavigator(
    get_categories(data, ItemList)
    , {
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

function get_categories(item, itemList) {
    var categories = [... new Set(item.map((item) => item.type))];
    
    var route = {};
    for (var category in categories){
        route[categories[category]] = {
            screen: itemList,
            navigationOptions: {
                tabBarLabel: categories[category],
            }
        }
    };
    return route;
}