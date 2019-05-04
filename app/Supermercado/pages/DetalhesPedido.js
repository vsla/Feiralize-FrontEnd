import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native'
import { CheckBox } from 'react-native-elements';
import LocationMap from '../components/LocationMap';
import firebase from 'firebase';
export default class DetalhesPedido extends Component {
  constructor(props) {
    super(props)
    console.log()
    this.state = {
      status: null,
      accepted: false,
      ready: false,
      data: this.props.navigation.getParam('data'),
      amountChecked: 1,
      total: 11
    }
  }

  componentWillMount() {
    firebase.database().ref('/teste/data/feirasProntas/'+this.state.data.key).once('value', (snapshot) => {
      this.setState({
        status: snapshot.val().status
      })
    })
  }

  // Functions that helps the logic 
  addCheckedOnParentFromChild = (id) => {
    if (id === 1) {
      this.setState({
        amountChecked: this.state.amountChecked + 1
      })
    } else {
      this.setState({
        amountChecked: this.state.amountChecked - 1
      })
    }
    console.log(this.state)
  }
  changeStatus = (id) => {
    if (this.state.status === 'PENDENTE') {
      if (id === 1) {
        firebase.database().ref('/teste/data/feirasProntas/'+this.state.data.key).update({status:'EM PREPARO'})
        this.setState({
          status: 'EM PREPARO'
        })
      }

    } else if (this.state.status === 'EM PREPARO') {
      if (id === 1) {
        if (this.state.amountChecked < this.state.total) {
          Alert.alert(
            'Nem todos os produtos foram selecionados',
            'Deseja continuar?',
            [
              {
                text: 'Sim', onPress: () => {
                  firebase.database().ref('/teste/data/feirasProntas/' + this.state.data.key).update({ status: 'EM ENTREGA' })
                  this.setState({
                    status: 'EM ENTREGA'
                  })
                }
              },
              {
                text: 'Voltar',
                onPress: () => { },
                style: 'cancel',
              },
            ]
          )
        } else {
          firebase.database().ref('/teste/data/feirasProntas/' + this.state.data.key).update({ status: 'EM ENTREGA' })
          this.setState({
            status: 'EM ENTREGA'
          })
        }
      }
    
  }else if(id === 2 ) {
      firebase.database().ref('/teste/data/feirasProntas/' + this.state.data.key).update({ status: 'PENDENTE' })
      this.setState({
        status: 'PENDENTE'
      })

   }else {
  if (id === 1) {

  } else if (id === 2) {
    firebase.database().ref('/teste/data/feirasProntas/' + this.state.data.key).update({ status: 'EM ENTREGA' })
    this.setState({
      status: 'EM ENTREGA'
    })
  }
}
  }
  cancelOrBack = () => {
    if (this.state.status === 'PENDENTE') {
      return (
        <Text style={{ color: 'darkorange', }}>Cancelar Pedido</Text>
      )
    } else if (this.state.status === 'EM PREPARO') {
      return (
        <View />
      )
    } else {
      return (
        <Text style={{ color: 'darkorange', }}>Voltar para seleção</Text>
      )
    }
  }
  renderNextButtonText = () => {
    if (this.state.status === 'PENDENTE') {
      return (
        <Text style={{ color: 'white', fontSize: 16, padding: 5 }}>Aceitar Pedido</Text>
      )
    } else if (this.state.status === 'EM PREPARO') {
      return (
        <Text style={{ color: 'white', fontSize: 16, padding: 5 }}>Pronto para entrega</Text>
      )
    } else {
      return (
        <Text style={{ color: 'white', fontSize: 16, padding: 5 }}>Entregar</Text>
      )
    }
  }
  renderLista = () => {
    if (this.state.status === 'EM PREPARO') {
      return (
        <Text style={style.sectionHeader} >Lista</Text>
      )
    }
  }
  renderStatusColor = () => {
    if (this.state.status === 'PENDENTE') {
      return (
        <View style={{ flexDirection: 'row', height: 6 }}>
          <View style={{ flex: 1, backgroundColor: 'red', marginRight: 5 }} />
          <View style={{ flex: 1, backgroundColor: '#d4d4d4' }} />
          <View style={{ flex: 1, backgroundColor: '#d4d4d4', marginLeft: 5 }} />
        </View>
      )
    } else if (this.state.status === 'EM PREPARO') {
      return (
        <View style={{ flexDirection: 'row', height: 6 }}>
          <View style={{ flex: 1, backgroundColor: 'red', marginRight: 5 }} />
          <View style={{ flex: 1, backgroundColor: '#eba04b' }} />
          <View style={{ flex: 1, backgroundColor: '#d4d4d4', marginLeft: 5 }} />
        </View>
      )
    } else {
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
    if (this.state.status === 'EM ENTREGA') {
      return (
        <View style={{ flex: 1 }}>
          < LocationMap />
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {this.renderLista()}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5 }}>
              <Text style={style.sectionHeader} >Qnt</Text>
              <Text style={style.sectionHeader} >Produto</Text>
              <Text style={style.sectionHeader} >Valor</Text>
            </View>
          </View>
          <FlatList
            data={[
              { key: 'a', quantidade: 1, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false },
              { key: 'b', quantidade: 2, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false },
              { key: 'c', quantidade: 3, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false },
              { key: 'd', quantidade: 4, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false },
              { key: 'e', quantidade: 5, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false },
              { key: 'f', quantidade: 6, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false },
              { key: 'g', quantidade: 7, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false },
              { key: 'h', quantidade: 8, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false },
              { key: 'i', quantidade: 9, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false },
              { key: 'j', quantidade: 10, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false },
              { key: 'k', quantidade: 11, produto: 'Arroz cristal tipo 1 1kg', valor: '4,5', selected: false, }
            ]}
            renderItem={({ item }) => <ProdutoComponent info={item} parentState={this.state} check={this.addCheckedOnParentFromChild} />}
          />
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', flex: 0.5, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 10 }}>
              <Text style={{}} >Taxas: </Text>
              <Text style={{}} >R$ 10,0</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 0.5, justifyContent: 'flex-end', alignItems: 'center', }}>
              <Text style={{}} >Taxas: </Text>
              <Text style={{}} >R$ 10,0</Text>
            </View>
          </View>
          <View>
            <Text style={style.sectionHeader} >Observações</Text>
            <Text style={style.sectionContent} >Favor separar os gelados dos de temperatura ambiente</Text>
            <View style={{ height: 2, backgroundColor: '#ebebeb', marginBottom: 2 }} />
          </View>
        </View>
      )
    }
  }
  // End of functions

render() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
      <View style={{ flex: 0.2 }}>
      </View>
      <View style={style.container}>
        {this.renderStatusColor()}
        <View style={style.containerInfo}>
          <View>
            <Text style={{ color: 'black', fontSize: 16 }}>Juliana Machado</Text>
            <Text style={style.sectionHeader} >#Código</Text>
            <View style={{ height: 3, backgroundColor: '#ebebeb', }} />
          </View>

          {this.renderSelectionItem()}
          <View style={{ marginBottom: 5, }}>
            <Text style={style.sectionHeader} >Forma de pagamento</Text>
            <Text style={style.sectionContent} >Pagamento em dinheiro, troco para R$ 100,00</Text>
            <View style={{ height: 2, backgroundColor: '#ebebeb', marginBottom: 2 }} />
            <Text style={style.sectionHeader} >Dados de entrega</Text>
            <Text style={style.sectionContent}>Entrega em domicílio</Text>
            <Text style={style.sectionContent}>Avenida Domingos Ferreira, 1034, apt 701</Text>
            <Text style={style.sectionContent}>Amanhã, 18h00</Text>
          </View>

          <View style={{ flexDirection: 'row-reverse', alignItems: 'center', marginBottom: 10, }}>
            <TouchableOpacity
              style={{ backgroundColor: 'darkorange', marginHorizontal: 5, borderRadius: 30 }}
              onPress={() => { this.changeStatus(1) }}
            >
              {this.renderNextButtonText()}
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: 'white', fontSize: 15, marginHorizontal: 15 }}
              onPress={() => { this.changeStatus(2) }}
            >
              {this.cancelOrBack()}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
}

class ProdutoComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accepted: false,
      ready: false,
      checked: false
    }
  }
  onPress = () => {
    if (this.state.checked == false) {
      this.setState({ checked: true })
      this.props.check(1)
    } else {
      this.setState({ checked: false })
      this.props.check(2)
    }
  }
  renderCheckBox = () => {
    if (this.props.parentState.status === 'EM PREPARO') {
      return (
        <CheckBox
          center
          checked={this.state.checked}
          onIconPress={() => this.onPress()}
          size={20}
          containerStyle={{ margin: 0, padding: 0, borderWidth: 0, alignSelf: 'flex-start' }}
        />
      )
    }
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.onPress()}
        style={{ flexDirection: 'row', marginVertical: 2 }}
        disabled={(this.state.status === 'EM PREPARO') ? false : true}
      >
        {this.renderCheckBox()}
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
          <Text>
            {this.props.info.quantidade}
          </Text>
          <Text>
            {this.props.info.produto}
          </Text>
          <Text>
            R$ {this.props.info.valor}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const style = StyleSheet.create({
  choice: {
    flex: 0.1
  },
  container: {
    flex: 10,
    backgroundColor: 'white',
    marginBottom: 8
  },
  containerInfo: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 5,

  },
  sectionHeader: {
    color: '#7a7a7a',
    marginTop: 2,
    marginBottom: 0,
    fontSize: 14
  },
  sectionContent: {
    color: '#252525',
    fontSize: 13,

  }
})
