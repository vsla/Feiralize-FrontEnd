import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import FeiraCard from '../components/FeiraCard';


export default class Pedidos extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#d4d4d4'}}>
      <View style={{flex:0.01,padding:1}}/>
      <FlatList
          data={[{ key: 'a', status: 'PENDENTE' }, { key: 'b', status: 'EM PREPARO' }, { key: 'c', status: 'EM ENTREGA' }, { key: 'd', status: 'PENDENTE' }, { key: 'e', status: 'PENDENTE' }, { key: 'f', status: 'PENDENTE'},{key: 'g', status: 'PENDENTE'},{key: 'h', status: 'PENDENTE'},{key: 'i', status: 'PENDENTE'},]}
        renderItem={({item}) => <FeiraCard screenProps={this.props.screenProps} fullData={item}/>}
        style={{flex:1}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
