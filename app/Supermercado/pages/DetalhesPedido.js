/* eslint-disable no-undef */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import LocationMap from '../components/LocationMap';
import firebase from 'firebase';
export default class DetalhesPedido extends Component {
  constructor(props) {
    /**
     * Recebe como parâmetro da tela de pedido as informações sobre 
     * Qual é o pedido a ser mostrado através de receivedData
     */
    super(props);
    const receivedData = this.props.navigation.getParam('data');
    this.state = {
      showCheck: false,
      status: null,
      data: receivedData,
      amountChecked: 1,
      total: receivedData.items.length
    };
  }

  componentDidMount() {
    /**
     * Antes do component renderizar ele lê do servidor qual o status do pedido no servidor
     * Para que esteja sincronizado utilizando a key recebida na tela de pedidos
     */
    firebase.database()
      .ref(`/teste/data/feirasProntas/${this.state.data.key}`)
      .once('value', (snapshot) => {
        this.setState({
          status: snapshot.val().status
        });
      });
  }
  // Functions that helps the logic 
  addCheckedOnParentFromChild = (id) => {
    /**
     * Essa função é chamada no component filho ProdutoComponent
     * Para verificar quantos checkbox foram verificados
     */
    if (id === 1) {
      this.setState({
        amountChecked: this.state.amountChecked + 1
      });
    } else {
      this.setState({
        amountChecked: this.state.amountChecked - 1
      });
    }
  }

  changeStatus = (id) => {
    /**
     * Função chamada para mudar o status do pedido
     * Diretamente com o firebase utilizando o update
     * E localmente com setState.
     * Caso o id for 1, é para mudar para frente o status
     * Caso o id for 2, ele volta o status
     */
    if (this.state.status === 'PENDENTE') {
      if (id === 1) {
        firebase.database()
          .ref(`/teste/data/feirasProntas/${this.state.data.key}`)
          .update({ status: 'EM PREPARO' });
        this.setState({
          status: 'EM PREPARO',
          showCheck: true,
        });
      }
    } else if (this.state.status === 'EM PREPARO') {
        if (id === 1) {
          /**
           * Checa se todos os produtos foram checados
           * E exibe uma mensagem de que nem todos foram
           */
          if (this.state.amountChecked < this.state.total) {
            Alert.alert(
              'Nem todos os produtos foram selecionados',
              'Deseja continuar?',
              [
                {
                  text: 'Sim',
                    onPress: () => {
                    firebase.database()
                      .ref(`/teste/data/feirasProntas/${ this.state.data.key}`)
                      .update({ status: 'EM ENTREGA' });
                    this.setState({
                      status: 'EM ENTREGA'
                    });
                  }
                },
                {
                  text: 'Voltar',
                  onPress: () => { },
                  style: 'cancel',
                },
              ]
            );
          } else {
            firebase.database()
              .ref(`/teste/data/feirasProntas/${ this.state.data.key}`)
              .update({ status: 'EM ENTREGA' });
            this.setState({
              status: 'EM ENTREGA'
            });
          }
        } else if (id === 2) {
            firebase.database()
              .ref(`/teste/data/feirasProntas/${this.state.data.key}`)
              .update({ status: 'PENDENTE' });
            this.setState({
              status: 'PENDENTE'
            });
        }
    } else if (id === 1) {
        this.props.navigation.navigate('PedidosHome');
      } else if (id === 2) {
        firebase.database()
          .ref(`/teste/data/feirasProntas/${this.state.data.key}`)
          .update({ status: 'EM PREPARO' });
        this.setState({
          status: 'EM PREPARO'
        });
      }
  }

  cancelOrBack = () => {
    /*
     * Resolve se deve renderizar o botão de voltar ou cancelar pedido.
     */
    if (this.state.status === 'PENDENTE') {
      return (
        <Text style={{ color: 'darkorange', }}>Cancelar Pedido</Text>
      );
    } else if (this.state.status === 'EM PREPARO') {
      return (
        <View />
      );
    } 
      return (
        <Text style={{ color: 'darkorange', }}>Voltar para seleção</Text>
      );
  }

  renderNextButtonText = () => {
  /*
   * Resolve qual o nome que aparece no botão de próximo
   */
    if (this.state.status === 'PENDENTE') {
      return (
        <Text style={{ color: 'white', fontSize: 16, padding: 5 }}>Aceitar Pedido</Text>
      );
    } else if (this.state.status === 'EM PREPARO') {
      return (
        <Text style={{ color: 'white', fontSize: 16, padding: 5 }}>Pronto para entrega</Text>
      );
    } 
      return (
        <Text style={{ color: 'white', fontSize: 16, padding: 5 }}>Entregar</Text>
      );
  }

  renderLista = () => {
  /**
   * Resolve se deve renderizar o texto lista que fica em cima da flatlist de produtos
   * Provavelmente foi uma gambiarra que depois deva ser tirada.
   */
    if (this.state.status === 'EM PREPARO') {
      return (
        <Text style={style.sectionHeader} >Lista</Text>
      );
    }
  }

  renderStatusColor = () => {
    /**
     * Renderiza a barra de status, mudando de acordo com o status
     * Do pedido
     */
    if (this.state.status === 'PENDENTE') {
      return (
        <View style={{ flexDirection: 'row', height: 6 }}>
          <View style={{ flex: 1, backgroundColor: 'red', marginRight: 5 }} />
          <View style={{ flex: 1, backgroundColor: '#d4d4d4' }} />
          <View style={{ flex: 1, backgroundColor: '#d4d4d4', marginLeft: 5 }} />
        </View>
      );
    } else if (this.state.status === 'EM PREPARO') {
      return (
        <View style={{ flexDirection: 'row', height: 6 }}>
          <View style={{ flex: 1, backgroundColor: 'red', marginRight: 5 }} />
          <View style={{ flex: 1, backgroundColor: '#eba04b' }} />
          <View style={{ flex: 1, backgroundColor: '#d4d4d4', marginLeft: 5 }} />
        </View>
      );
    } 
      return (
        <View style={{ flexDirection: 'row', height: 6 }}>
          <View style={{ flex: 1, backgroundColor: 'red', marginRight: 5 }} />
          <View style={{ flex: 1, backgroundColor: '#eba04b' }} />
          <View style={{ flex: 1, backgroundColor: '#5dab5d', marginLeft: 5 }} />
        </View>
      );
  }
  renderSelectionItem = () => {
    /**
     * Renderiza o mapa se o status for em entrega
     * ou a flatlist com a lista de produtos.
     */
    const data = this.props.navigation.getParam('data').items;
    if (this.state.status === 'EM ENTREGA') {
      return (
        <View style={{ flex: 1 }}>
          < LocationMap />
        </View>
      );
    } 
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
          data={data}
          renderItem={({ item }) => <ProdutoComponent info={item} parentState={this.state} check={this.addCheckedOnParentFromChild} showCheck={this.state.showCheck} />}
        />
        <View style={{ justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 5 }}>
            <Text style={{}} >Taxas: </Text>
            <Text style={{}} >{this.state.data.price}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
            <Text style={{}} >Total: </Text>
            <Text style={{}} >{this.state.data.price}</Text>
          </View>
        </View>
        <View>
          <Text style={style.sectionHeader} >Observações</Text>
          <Text style={style.sectionContent} >{this.state.data.notes}</Text>
          <View style={{ height: 2, backgroundColor: '#ebebeb', marginBottom: 2 }} />
        </View>
      </View>
    );
        
  }
  // End of functions

  //Aqui que e renderizado a página do detalhes do pedido
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
        <View style={{ flex: 0.2 }} />
        <View style={style.container}>
          {/* Renderiza os status */}
          {this.renderStatusColor()}
          <View style={style.containerInfo}>
            <View>
              <Text style={{ color: 'black', fontSize: 16 }}>Juliana Machado</Text>
              <Text style={style.sectionHeader} >#Código</Text>
              <View style={{ height: 3, backgroundColor: '#ebebeb', }} />
            </View>
            {/* Renderiza os mapa ou a lista de produtos */}
            {this.renderSelectionItem()}
            <View style={{ marginBottom: 5, }}>
              <Text style={style.sectionHeader} >Forma de pagamento</Text>
              <Text style={style.sectionContent} >{this.state.data.payment}</Text>
              <View style={{ height: 2, backgroundColor: '#ebebeb', marginBottom: 2 }} />
              <Text style={style.sectionHeader} >Dados de entrega</Text>
              <Text style={style.sectionContent}>{this.state.data.delivery.type}</Text>
              <Text style={style.sectionContent}>{this.state.data.delivery.location}</Text>
              <Text style={style.sectionContent}>{this.state.data.delivery.date}, {this.state.data.delivery.hour}</Text>
            </View>

            <View style={{ flexDirection: 'row-reverse', alignItems: 'center', marginBottom: 10, }}>
              {/* Renderiza os botões */}
              <TouchableOpacity
                style={{ backgroundColor: 'darkorange', marginHorizontal: 5, borderRadius: 30 }}
                onPress={() => { this.changeStatus(1); }}
              >
                {this.renderNextButtonText()}
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: 'white', fontSize: 15, marginHorizontal: 15 }}
                onPress={() => { this.changeStatus(2); }}
              >
                {this.cancelOrBack()}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class ProdutoComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props, 1);
    this.state = {
      accepted: false,
      ready: false,
      checked: false,
      parentStatus: this.props.parentState.status,
      status: null
    };
  }

  componentDidMount() {
    firebase.database().ref(`/teste/data/feirasProntas/${this.props.parentState.data.key}`).on('value', (snapshot) => {
      this.setState({
        status: snapshot.val().status
      });
    });
  }

  onPress = () => {
    if (this.state.checked == false) {
      this.setState({ checked: true });
      this.props.check(1);
    } else {
      this.setState({ checked: false });
      this.props.check(2);
    }
  }
  renderCheckBox = () => {
    console.log(this.props);
    if (this.state.parentStatus === 'EM PREPARO' || this.props.parentState.status === 'EM PREPARO' || this.state.status === 'EM PREPARO') {
      return (
        <CheckBox
          center
          checked={this.state.checked}
          onIconPress={() => this.onPress()}
          size={20}
          containerStyle={{ margin: 0, padding: 0, borderWidth: 0, alignSelf: 'flex-start' }}
        />
      );
    }
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.onPress()}
        style={{ flexDirection: 'row', marginVertical: 2 }}
        disabled={this.state.status !== 'EM PREPARO'}
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
            R$ {this.props.info.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
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
});
