import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class FeiraCard extends Component {
  constructor(props){
    super(props)
    this.state={
      status:'Pendente',
      colorStatus: ''
    }
  }
  render() {
    return (
      <TouchableOpacity
        style={{backgroundColor:'white', marginTop:2, paddingVertical:4}}
        onPress={() => {}}
      >
        <View style={{marginHorizontal:10}}>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{ color:'black', fontWeight:'bold'}}>JULIANA MACHADO</Text>
            <Text>#CODIGO08</Text>
            <Text style={{
              backgroundColor:'red', 
              color:'white',
              paddingVertical:3,
              borderRadius:20,
              paddingHorizontal:5,
              fontSize:15
            }}>{this.state.status}</Text>
          </View>
          <Text style={{flex:1, color:'black'}}>Entrega em domicilio</Text>
          <Text style={{flex:1, color:'black',}}>Amanhã, 18h30</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

