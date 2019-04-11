import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import testes1 from '../pages/testes1';
import PagInicial from '../pages/PagInicial';

const DrawerNav = createDrawerNavigator(
    {
        Home1: {
            screen:PagInicial,
        },
        Notifications: {
            screen: testes1,
        },
    },
    /**
     *{
         contentComponent: CustomDrawerContentComponent
     }
     * 
     */
    
)
/** 
 * const CustomDrawerContentComponent = (props) => (
    <View style={{flex:1, backgroundColor:'red'}}>
        <Text>oi</Text>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </View>
);
 * 
*/

export default DrawerNav;