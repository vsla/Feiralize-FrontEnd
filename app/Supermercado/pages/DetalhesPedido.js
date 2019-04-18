import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DetalhesPedido extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#d4d4d4'}}>
        <View style={style.choice}>
        </View>
        <View style={style.container}>
          <View style={style.containerInfo}>
            <Text>Juliana Machado</Text>
            <Text>#Código</Text>
            <View style={{alignSelf:'stretch'}} />
            <View style={{flexDirection:'row'}}>
              <Text>QTD</Text>
              <Text>Produto</Text>
              <Text>Valor</Text>
            </View>
             <Text>Juliana Machado</Text>
            <View style={{alignSelf:'stretch'}} />
            <Text>Juliana Machado</Text>
            <View style={{alignSelf:'stretch'}} />
            <Text>Juliana Machado</Text>
            <View style={{alignSelf:'stretch'}} />
          </View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  choice:{
    flex:1
  },
  container:{
    flex:10,
    backgroundColor:'white'
  },
  containerInfo:{
    marginHorizontal:10
  }
})
