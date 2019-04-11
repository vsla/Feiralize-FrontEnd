import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class FeiraCard extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{backgroundColor:'white', marginTop:2, paddingVertical:4}}
        onPress={() => {}}
      >
        <View style={{marginLeft:5}}>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
            <Text>JULIANA MACHADO</Text>
            <Text>#CODIGO08</Text>
            <View>
                <Text>Pendente</Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <Text>Entrega em domicilio</Text>
          </View>
          <View style={{flex:1}}>
            <Text>Amanhã</Text>
          </View>
        </View>
        
      </TouchableOpacity>
    )
  }
}

