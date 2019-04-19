import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

export default class DetalhesPedido extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#f1f1f1'}}>
        <View style={{ flex: 0.2}}>
        </View>
        <View style={style.container}>
          <View style={{flexDirection:'row', height:10}}>
            <View style={{ flex: 1, backgroundColor: 'red', marginRight:5 }} />
            <View style={{ flex: 1, backgroundColor: '#d4d4d4' }} />
            <View style={{ flex: 1, backgroundColor: '#d4d4d4', marginLeft:5 }} />
          </View> 
          <View style={style.containerInfo}>
            <View>
              <Text style={{color:'black', fontSize:16, marginTop:0}}>Juliana Machado</Text>
              <Text style={style.sectionHeader} >#Código</Text>
              <View style={{ height: 3, backgroundColor: '#ebebeb', marginTop:5 }} />
            </View>

            <View style={{flexDirection:'row'}}>
              <Text style={style.sectionHeader} >QTD</Text>
              <Text style={style.sectionHeader} >Produto</Text>
              <Text style={style.sectionHeader} >Valor</Text>
              
            </View>
            <FlatList
                data={[
                  { key: 'a', quantidade:1, produto: 'Arroz cristal tipo 1 1kg', valor:'4,5' }, 
                  { key: 'b', quantidade:1, produto: 'Arroz cristal tipo 1 1kg', valor:'4,5'  }
                ]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
              />
            
            <View style={{marginBottom:5}}>
             <Text style={style.sectionHeader} >Observações</Text>
              <Text style={style.sectionContent} >Favor separar os gelados dos de temperatura ambiente</Text>
              <View style={{ height: 2, backgroundColor: '#ebebeb'}} />        
              <Text style={style.sectionHeader} >Forma de pagamento</Text>
              <Text style={style.sectionContent} >Pagamento em dinheiro, troco para R$ 100,00</Text>
              <View style={{ height: 2, backgroundColor: '#ebebeb'}} />
              <Text style={style.sectionHeader} >Dados de entrega</Text>
              <Text style={style.sectionContent}>Entrega em domicílio</Text>
              <Text style={style.sectionContent}>Avenida Domingos Ferreira, 1034, apt 701</Text>
              <Text style={style.sectionContent}>Amanhã, 18h00</Text>
            </View>
            <View style={{flexDirection:'row-reverse', alignItems:'center', marginBottom:10, }}>
              <TouchableOpacity
                style={{ backgroundColor: 'darkorange', marginHorizontal:5, borderRadius:30}}
                onPress={() => {}}
              >
                <Text style={{ color: 'white', fontSize:16, padding:5}}>Aceitar Pedido</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: 'white', fontSize: 15, marginHorizontal:15}}
                onPress={() => {}}
              >
                <Text style={{color:'darkorange'}}>Cancelar Pedido</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  choice:{
    flex:0.1
  },
  container:{
    flex:10,
    backgroundColor:'white',
    marginBottom:8
  },
  containerInfo:{
    flex:1,
    marginHorizontal:15,
    marginTop:5
  },
  sectionHeader:{
    color: '#7a7a7a',
    marginTop:5,
    marginBottom:0
  },
  sectionContent:{
    color: '#252525',
  }
})
