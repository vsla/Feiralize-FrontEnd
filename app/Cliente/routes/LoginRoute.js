import React, {Component} from 'react';
import { createStackNavigator} from 'react-navigation';
import Login from "../pages/Login";
import LoginEmail from "../pages/loginEmail"


const LoginRoute = createStackNavigator(
  /**
   * Navegação das telas de login
   * Depois do login feito, volta-se a navegação para o initalRoute
   * E troca para o bottomNavigator
   **/
  {
    login: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
      })
    },
    loginEmail: {
      screen: LoginEmail,
      navigationOptions: () => ({
        header: null,
      })
    },
  },
  {
    initialRouteName: "login",
  }
)
export default LoginRoute;