import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { CheckBox } from 'react-native-elements';

export default class DetalhesPedido extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accepted: false,
      ready: false
    }
  }
  changeStatus = () => {
    if(this.state.accepted === false & this.state.ready === false){
     this.setState({
       accepted:true
     })
    } else if (this.state.accepted === true & this.state.ready === false){
      this.setState({
        ready: true
      })
    }
  }
  renderLista = () => {
    if (this.state.accepted === true){
      return ( 
        <Text style={style.sectionHeader} >Lista</Text>
        )
    }
  }
  renderStatusColor = () => {
    if(this.state.accepted === false & this.state.ready === false){
      return(
        <View style={{ flexDirection: 'row', height: 6 }}>
          <View style={{ flex: 1, backgroundColor: 'red', marginRight: 5 }} />
          <View style={{ flex: 1, backgroundColor: '#d4d4d4' }} />
          <View style={{ flex: 1, backgroundColor: '#d4d4d4', marginLeft: 5 }} />
        </View> 
      )
    } else if (this.state.accepted === true & this.state.ready === false){
      return (
        <View style={{ flexDirection: 'row', height: 6 }}>
          <View style={{ flex: 1, backgroundColor: 'red', marginRight: 5 }} />
          <View style={{ flex: 1, backgroundColor: '#eba04b' }} />
          <View style={{ flex: 1, backgroundColor: '#d4d4d4', marginLeft: 5 }} />
        </View>
      )
    } else{
      return (
        <View style={{ flexDirection: 'row', height: 6 }}>
          <View style={{ flex: 1, backgroundColor: 'red', marginRight: 5 }} />
          <View style={{ flex: 1, backgroundColor: '#eba04b' }} />
          <View style={{ flex: 1, backgroundColor: '#5dab5d', marginLeft: 5 }} />
        </View>
      )
    }
  }
    renderSelectionItem = () => {
      if (this.state.accepted === true && this.state.ready === true){
        <View>
          <Text>oi</Text>
        </View>
      }else{
        return(
          <View style={{flex:1}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              {this.renderLista()}
              <View style={{flex:1,flexDirection:'row', justifyContent:'space-between', marginLeft:5}}>
                <Text style={style.sectionHeader} >Qnt</Text>
                <Text style={style.sectionHeader} >Produto</Text>
                <Text style={style.sectionHeader} >Valor</Text>              
              </View>
            </View>
          <FlatList
              data={[
                { key: 'a', quantidade:1, produto: 'Arroz cristal tipo 1 1kg', valor:'4,5' }, 
                { key: 'b', quantidade:1, produto: 'Arroz cristal tipo 1 1kg', valor:'4,5'  },
                { key: 'c', quantidade: 1, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5' },
                { key: 'd', quantidade: 1, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5' },
                { key: 'e', quantidade: 1, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5' },
                { key: 'f', quantidade: 1, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5' },
                { key: 'g', quantidade:1, produto: 'Arroz cristal tipo 1 1kg', valor:'4,5' }, 
                { key: 'h', quantidade:1, produto: 'Arroz cristal tipo 1 1kg', valor:'4,5'  },
                { key: 'i', quantidade:1, produto: 'Arroz cristal tipo 1 1kg', valor:'4,5' }, 
                { key: 'j', quantidade:1, produto: 'Arroz cristal tipo 1 1kg', valor:'4,5'  },
                { key: 'k', quantidade:1, produto: 'Arroz cristal tipo 1 1kg', valor:'4,5' },
                
              ]}
              renderItem={({ item }) => <ProdutoComponent data={item} parentState={this.state}/>}
            />
          
            <View>
              <Text style={style.sectionHeader} >Observações</Text>
                <Text style={style.sectionContent} >Favor separar os gelados dos de temperatura ambiente</Text>
                <View style={{ height: 2, backgroundColor: '#ebebeb', marginBottom:2}} />        
              </View>
          </View>
        )
      }
    }
  
  render() {
    //https://www.npmjs.com/package/react-native-table-component
    return (
      <View style={{flex:1,backgroundColor:'#f1f1f1'}}>
        <View style={{ flex: 0.2}}>
        </View>
        <View style={style.container}>
          {this.renderStatusColor()}
          <View style={style.containerInfo}>
            <View>
              <Text style={{color:'black', fontSize:16}}>Juliana Machado</Text>
              <Text style={style.sectionHeader} >#Código</Text>
              <View style={{ height: 3, backgroundColor: '#ebebeb', }} />
            </View>

            {this.renderSelectionItem()}
            <View style={{marginBottom:5}}>
              <Text style={style.sectionHeader} >Forma de pagamento</Text>
              <Text style={style.sectionContent} >Pagamento em dinheiro, troco para R$ 100,00</Text>
              <View style={{ height: 2, backgroundColor: '#ebebeb', marginBottom:2}} />
              <Text style={style.sectionHeader} >Dados de entrega</Text>
              <Text style={style.sectionContent}>Entrega em domicílio</Text>
              <Text style={style.sectionContent}>Avenida Domingos Ferreira, 1034, apt 701</Text>
              <Text style={style.sectionContent}>Amanhã, 18h00</Text>
            </View>

            <View style={{flexDirection:'row-reverse', alignItems:'center', marginBottom:10, }}>
              <TouchableOpacity
                style={{ backgroundColor: 'darkorange', marginHorizontal:5, borderRadius:30}}
                onPress={() => {this.changeStatus()}}
              >
                <Text style={{ color: 'white', fontSize:16, padding:5}}>Aceitar Pedido</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: 'white', fontSize: 15, marginHorizontal:15}}
                onPress={() => {}}
              >
                <Text style={{color:'darkorange',}}>Cancelar Pedido</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

class ProdutoComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      accepted: false,
      ready: false,
      checked:false
    }
  }
  renderCheckBox = () => {
    if (this.props.parentState.accepted === true & this.props.parentState.ready === false) {
      return(
        <CheckBox
          center
          checked={this.state.checked}
          onIconPress={() => {
            if(this.state.checked == false){
              this.setState({checked:true})
            }else{
              this.setState({checked:false})
            }
          }}
          size={20}
          containerStyle={{margin:0, padding:0,borderWidth:0, alignSelf:'flex-start'}}
        />
      )
   }
  }
  render(){
    return(
      <TouchableOpacity 
        onPress={() => {
          if(this.state.checked == false){
              this.setState({checked:true})
            }else{
              this.setState({checked:false})
            }}}
        style={{flexDirection: 'row', marginVertical:2 }}
      >
        {this.renderCheckBox()}
        <View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between', }}>
          <Text>
            {this.props.data.quantidade}
          </Text>
          <Text>
          {this.props.data.produto}
          </Text>
          <Text>
          R$ {this.props.data.valor}
          </Text>
        </View>
      </TouchableOpacity>
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
    marginTop:5,
    
  },
  sectionHeader:{
    color: '#7a7a7a',
    marginTop:2,
    marginBottom:0,
    fontSize: 13
  },
  sectionContent:{
    color: '#252525',
    fontSize: 12
  }
})
