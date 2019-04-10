import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import BottomNavigator from './BottomNavigator';
import LoginRoute from './LoginRoute';
import PaginaInicial from '../../Supermercado/pages/PagInicial';

const InitialRoute = createSwitchNavigator(
    /** 
    * In this route, we use SwitchNavigator because after login, we dont want to go back from the main program.
    * Start calling loginRoute that is a stackNavigator.
    * And bottomNavigator is the main program route.
    **/
  {
    loginRoute: {
        screen: LoginRoute,
            navigationOptions: () => ({
                header: null,
            })
    },
    bottomNavigator: {
        screen: BottomNavigator,
            navigationOptions: () => ({
                header: null,
            })
    },
    supermarket:{
        screen: PaginaInicial,
            navigationOptions: () => ({
                header: null,
            })
    }
}
);

export default InitialRoute ;