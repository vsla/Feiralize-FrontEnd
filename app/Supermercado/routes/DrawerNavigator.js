import React, { Component } from "react";
import { StatusBar, TouchableOpacity } from 'react-native';
import {  View,  Text,  StyleSheet,  Image, ToolbarAndroid } from "react-native"; 
import { Container, Content, Header, Body } from 'native-base'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import themeStyle from '../styles/theme.style';
import Pedidos from '../pages/Pedidos';
import testes1 from '../pages/testes1';
import testes2 from '../pages/testes2';
import testes3 from '../pages/testes3';
import PedidoRoute from "./PedidoRoute";
import ThePicker from '../components/ThePicker'



const CustomDrawerContentComponent = (props) => (
  <Container>
    <StatusBar backgroundColor="darkorange"  />
    <Header style={styles.drawerHeader}>
      <Body flexDirection='row'>
        <Image
          style={styles.drawerImage}
          source={require('../assets/data/images/0.jpg')} />
        <View>
            <Text style= {styles.nameStyle}>Mercado do Bairro</Text>
            <Text style= {styles.name2Style}>Rafael Oliveira</Text>
        </View>
      </Body>
    </Header>
    <View style= {styles.pickerStyle}>
      <ThePicker/>
    </View>
    
    <Content>
      <DrawerItems {...props} />
    </Content>
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('loginRoute')}
      >
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  </Container>

);

const MyApp = createDrawerNavigator({

  'Pedidos em andamento': {
    screen: PedidoRoute,
  },
  'Registro de pedidos': {
    screen: testes1
  },
  Configurações: {
      screen: testes2
  },
  'Sobre o feiralize': {
      screen: testes3
  },
  Contato: {
    screen: Pedidos
  }
  },
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  });
export default MyApp;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    backgroundColor: themeStyle.BG_color, 
    justifyContent: 'space-around',
    height: 130,
    paddingTop: 20
  },
  drawerImage: {
    height:75,
    width:75,
    borderRadius: 100,
    borderWidth: 1,
    marginBottom:10
  },
  nameStyle:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    marginLeft: 11,
    marginTop: 7
},
name2Style:{
    color:'white',
    fontSize: 13,
    marginLeft: 11,
    marginTop: 3
},
pickerStyle:{
  backgroundColor: themeStyle.BG_color,
  paddingBottom: 5
},
})