import React from 'react';
import { StyleSheet, Text, View, Picker, Button, Modal, TouchableHighlight } from 'react-native';
import FeiraHistoricoCard from '../components/FeiraHistoricoCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:10}}>
        <View style={style.header}>
          <Text style={style.textHeader}>Histórico</Text>
        </View>
        <View style={{flex:5}}>
          <FeiraHistoricoCard/>
          < FeiraHistoricoCard/>
          <FeiraHistoricoCard/>
        </View>
      </View>
    );
  }
}

const style= StyleSheet.create({
  header: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor:'darkorange',
    

  },
  textHeader:{
    fontSize:40,
    color:'white',
    marginBottom: 20,
    marginLeft: 20
  }
})
