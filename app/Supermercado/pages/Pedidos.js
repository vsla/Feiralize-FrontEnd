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
      var data = []
      const orders = snapshot.val()
      console.log(orders)
      if(this.state.routeName ==='TODOS' ){
        var indexes = Object.keys(orders)
        indexes.map((index) => {
          data.push(orders[index])
        })
        console.log(data)
        this.setState({
          fullData: orders,
          orders: data,
          isLoading: false
        })
      }else{
        var indexes = Object.keys(orders)
        indexes.map((index) => {
          if (orders[index].status === this.state.routeName) {
            data.push(orders[index])
          }
        })
        
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
