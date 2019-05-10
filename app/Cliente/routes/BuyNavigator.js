import React, {
  Component
} from 'react';
import { createStackNavigator } from 'react-navigation';
import Supermercado from '../pages/Supermercado';
import CartScreen from '../pages/Carrinho';
import Pagamento from '../pages/Pagamento';
import Details from '../pages/Details';
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
    checkout: {
      screen: Pagamento,
      navigationOptions: () => ({
        header: null,
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