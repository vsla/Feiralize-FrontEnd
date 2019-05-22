import React, {
  Component
} from 'react';
import { createStackNavigator } from 'react-navigation';
import Supermercado from '../pages/Supermercado';
import CartScreen from '../pages/Carrinho';
import FinalizarPedido from '../pages/FinalizarPedido';
import Details from '../pages/Details';
import Agendamento from '../pages/Agendamento';

const BuyNavigator = createStackNavigator(
  {
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        headerTitle: 'Carrinho'
      }
    },
    Supermarkets: {
      screen: Supermercado,
      navigationOptions: {
        headerTitle: 'Supermercados',
      }
    },
    scheduling: {
      screen: Agendamento,
      navigationOptions: () => ({
      })
    },
    checkout: {
      screen: FinalizarPedido,
      navigationOptions: () => ({
      })
    },
    Details: {
      screen: Details,
      navigationOptions: () => ({
        header: null,
      })
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#5d5d5d',
      style: {
        backgroundColor: 'darkorange'
      },
      indicatorStyle: {
        height: 5,
        color: 'white',
        backgroundColor: "white",
      },
      labelStyle: {
        fontSize: 15
      }
    }
  });
export default BuyNavigator;