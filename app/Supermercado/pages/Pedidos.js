import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import FeiraCard from '../components/FeiraCard';
import firebase from 'firebase';

export default class Pedidos extends Component {
  constructor(props){
    super(props)
    this.state = {
      fullData:null,
      orders: null,
      routeName: this.props.navigation.state.routeName,
      isLoading:true,
    }
  }
  
  componentWillMount() {
    /*
    firebase.database().ref('/teste').set({
      data:{
        feirasProntas: 
        [{ key: 'a', status: 'PENDENTE' },
        { key: 'b', status: 'EM PREPARO' },
        { key: 'c', status: 'EM ENTREGA' }]
      }
    })
    */
   
    firebase.database().ref('/teste/data/feirasProntas/').once('value', (snapshot) => {
      const data = []
      const orders = snapshot.val()
      
      if(this.state.routeName ==='TODOS' ){
        this.setState({
          fullData: orders,
          orders: orders,
          isLoading: false
        })
      }else{
        
        for (var index in orders) {
          if (orders[index].status === this.state.routeName) {
            data.push(orders[index])
          }
        }
        /*
        data = Object.keys(orders).map((key) => {
          if(orders[key].status === this.state.routeName){
            return orders[key]
          }else{
            return
          }
        })
         */
        
        this.setState({
          fullData: orders,
          orders: data,
          isLoading: false
        })
      }
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color='black' />
        </View>
      )
    } else {
      
    return (
      <View style={{flex:1,backgroundColor:'#d4d4d4'}}>
      <View style={{flex:0.01,padding:1}}/>
      <FlatList
        data={this.state.orders}
        renderItem={({item}) => <FeiraCard screenProps={this.props.screenProps} fullData={item}/>}
        style={{flex:1}}
      />
      </View>
    );
    }
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
