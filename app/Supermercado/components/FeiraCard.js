import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class FeiraCard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.fullData);
    this.state = {
      status: this.props.fullData.status,
      colorStatus: ''
    };
  }
  renderStatusType = () => {
    if (this.state.status === 'PENDENTE') {
      return (
        <Text
        style={{
          backgroundColor: '#dc5a5a',
          color: 'white',
          paddingVertical: 3,
          borderRadius: 20,
          paddingHorizontal: 5,
          fontSize: 13
        }}
        >{this.state.status}</Text>
      );
    } else if (this.state.status === 'EM PREPARO') {
      return (
        <Text
          style={{
          backgroundColor: '#eba04b',
          color: 'white',
          paddingVertical: 3,
          borderRadius: 20,
          paddingHorizontal: 5,
          fontSize: 13
        }}
        >{this.state.status}</Text>
      );
    }
      return (
        <Text
          style={{
          backgroundColor: '#5aaa5a',
          color: 'white',
          paddingVertical: 3,
          borderRadius: 20,
          paddingHorizontal: 5,
          fontSize: 13
        }}
        >{this.state.status}</Text>
      );
      
    
  }
  render() {
    return (
      <TouchableOpacity
        style={{ backgroundColor: 'white', marginTop: 2, paddingVertical: 4 }}
        onPress={() => { 
          this.props.screenProps.navigate('DetalhesPedido', { data: this.props.fullData }); 
        }}
      >
        <View style={{ marginHorizontal: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Chiu young</Text>
            
            {this.renderStatusType()}
          </View>
          <Text style={{ flex: 1, color: 'black' }}>{this.props.fullData.delivery.type}</Text>
          <Text style={{ flex: 1, color: 'black', }}>{this.props.fullData.delivery.date}, {this.props.fullData.delivery.hour}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

