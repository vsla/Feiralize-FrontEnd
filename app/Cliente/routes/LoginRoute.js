import React, {Component} from 'react';
import { createStackNavigator} from 'react-navigation';
import Login from "../pages/Login";
import LoginEmail from "../pages/loginEmail"
import SignUp from '../pages/SignUp';

const LoginRoute = createStackNavigator(
  /**
   * Navegação das telas de login
   * Depois do login feito, volta-se a navegação para o initalRoute
   * E troca para o bottomNavigator
   **/
  {
    loginEmail: {
      screen: LoginEmail,
      navigationOptions: () => ({
        header: null,
      })
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: () => ({
        header: null,
      })
    }
  }
)
export default LoginRoute;