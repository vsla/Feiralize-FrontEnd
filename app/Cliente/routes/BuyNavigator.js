import React, {
    Component
} from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Supermercado from '../pages/Supermercado';
import CartScreen from '../pages/Carrinho';

const BuyNavigator = createMaterialTopTabNavigator(
    {
    Produtos: {
        screen: CartScreen,
        navigationOptions: {
            tabBarLabel: 'LISTA',
        }
    },
    Mercados: {
        screen: Supermercado,
        navigationOptions: {
            tabBarLabel: 'COMPRAR',
        }
    }
}, 
{
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#e1e1e1',
        style: {
            backgroundColor: 'darkorange'
        },
        indicatorStyle: {
            height: 5,
            color: 'white',
            backgroundColor: "white",
        },
        labelStyle:{
            fontSize:15
        }
    }
});
export default BuyNavigator;