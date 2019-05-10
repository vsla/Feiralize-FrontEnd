import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import BottomNavigator from './BottomNavigator';
import LoginRoute from './LoginRoute';
import DrawerNav from '../../Supermercado/routes/DrawerNavigator';
import PedidoRoute from '../../Supermercado/routes/PedidoRoute';
import LoginEmail from "../pages/loginEmail"
import SignUp from '../pages/SignUp';

const InitialRoute = createSwitchNavigator(
	/** 
	* In this route, we use SwitchNavigator because after login, we dont want to go back from the main program.
	* Start calling loginRoute that is a stackNavigator.
	* And bottomNavigator is the main program route.
	**/
	{
		loginRoute: {
			screen: LoginEmail,
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
		supermarket: {
			screen: DrawerNav,
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
);

export default InitialRoute;