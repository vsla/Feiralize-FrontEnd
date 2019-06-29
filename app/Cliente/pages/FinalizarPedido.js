/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, FlatList, Dimensions, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Overlay } from 'react-native-elements';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/cart';
import ReuseIcon from '../components/ReuseIcon';

class FinalizarPedido extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      selected: 'Dinheiro',
      showPaymentMethod: false,
      paymentMethod: null,
      arrow: 'arrow-up',
      transshipment: null,
      openTransshipmentModal: false
    };
  }

  confirmarCompra = () => {
    if (this.state.paymentMethod === 'Dinheiro') {
      this.setState({ openTransshipmentModal: true });
    } else {
      Alert.alert(
        `Confirmar compra de R$ ${Math.round(this.props.cartValue * 100) / 100}`,
        '',
        [
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              const newPostKey = firebase.database().ref('/teste/data/feirasProntas/').push().key;
              firebase.database().ref(`/teste/data/feirasProntas/${newPostKey}`).set({
                key: newPostKey,
                status: 'PENDENTE',
                items: this.props.cartItems,
                price: (Math.round(this.props.cartValue * 100) / 100),
                delivery: {
                  type: 'Entrega em domicílio',
                  date: 'Segunda',
                  hour: '13:00',
                  location: 'Avenida Domingo Ferreira, 1034, apt 701'
                },
                notes: '',
                payment: this.state.selected
              });
              this.props.add_payment_method(this.state.selected);
              this.props.reset_cart(this.state.selected);
              this.props.navigation.navigate('Cart');
            }
          },
        ],
      );
    }
  }

  openPaymentMethod = () => {
    if (this.state.showPaymentMethod) {
      this.setState({ showPaymentMethod: false, arrow: 'arrow-up' });
    } else {
      this.setState({ showPaymentMethod: true, arrow: 'arrow-down' });
    }
  }

  renderPaymentMethod = () => {
    if (this.state.showPaymentMethod === true) {
      return (
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <ReuseIcon name={'cash'} color={'black'} size={20} />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>Dinheiro</Text>
            </View>
            <View>
              <RadioButton
                value="Dinheiro"
                status={this.state.paymentMethod === 'Dinheiro' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ paymentMethod: 'Dinheiro' }); }}
              />
            </View>            
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <ReuseIcon name={'card'} color={'black'} size={20} />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>Débito na entrega</Text>
            </View>
            <View style={{}}>
              <RadioButton
                value="Cartão de débito"
                status={this.state.paymentMethod === 'Cartão de débito' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ paymentMethod: 'Cartão de débito' }); }}
              />
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <ReuseIcon name={'card'} color={'black'} size={20} />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>Crédito na entrega</Text>
            </View>
            <View style={{}}>
              <RadioButton
                value="Cartão de crédito"
                status={this.state.paymentMethod === 'Cartão de crédito' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ paymentMethod: 'Cartão de crédito' }); }}
              />
            </View>
          </View>
                    
        </View>
      );
    }
  }

  render() {
    return (
      <View style={style.viewStyle}>
        <ScrollView>
          <Text style={style.textStyle}>Fornecedor</Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 60,
              borderTopColor: 'lavender',
              borderBottomColor: 'lavender',
              borderBottomWidth: 0.8,
              paddingLeft: 15,
              paddingRight: 15,
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                marginRight: 15,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgrey',
                height: 40,
                width: 70,
                alignSelf: 'center'
              }}
            >
              <Text>Logo</Text>
            </View>
            <Text style={{ marginTop: 10 }}>Mercado do Bairro</Text>
          </View>

          <Text style={style.textStyle}>Dados da entrega</Text>
          <View
            style={{
              backgroundColor: 'white',
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 5,
              paddingBottom: 5
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>ENDEREÇO</Text>
            <Text style={{ fontSize: 12 }}>Avenida Boa Viagem, 120, apt 201 em...</Text>
            <View style={{ height: 1, backgroundColor: 'lightgrey' }} />
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>DATA E HORA</Text>
            <Text style={{ fontSize: 12 }}>Hoje, 6 de maio, 18h30 as 19h00</Text>
            <View style={{ height: 1, backgroundColor: 'lightgrey' }} />
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>OBSERVAÇÃO</Text>
            < TextInput
              placeholder="Digite uma observação"
              placeholderTextColor='grey'
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderTopColor: 'lavender',
              borderTopWidth: 0.8,
              borderBottomColor: 'lavender',
              borderBottomWidth: 0.8,
              marginBottom: 10
            }}
          >
            <TouchableOpacity
              onPress={() => { this.openPaymentMethod(); }}
              style={{
                flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, paddingTop: 10, paddingBottom: 5, }}
            >
              <Text style={style.paymentMethod}>Forma de pagamento</Text>
              <ReuseIcon
                name={this.state.arrow}
                size={20}
                color={'black'}
              />
            </TouchableOpacity>
            
            <View style={{ flex: 1, height: 1, backgroundColor: '#d6d6d6' }} />
            {this.renderPaymentMethod()}
          </View>
          {
            /**
             * Colocar aqui observação
             */
          }
          <Text style={style.textStyle}>Carrinho</Text>
          <View
            style={{
              backgroundColor: 'white',
              borderTopColor: 'lavender',
              borderTopWidth: 0.8,
              borderBottomColor: 'lavender',
              borderBottomWidth: 0.8,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 70,
              elevation: 2
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Qtd</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Descrição</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Preço</Text>
            </View>
            <FlatList
              data={this.props.cartItems}
              renderItem={({ item }) => 
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{item.amount}</Text>
                <Text>{item.name} {item.brand}</Text>
                <Text>R$ 10,0</Text>
              </View>}
            />
            <View style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 5 }} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginBottom: 5,
                marginTop: 5
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 12, marginRight: 5 }}>TOTAL</Text>
              <Text style={{ fontSize: 15 }}>R$ {this.props.cartValue}</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 20, justifyContent: 'center', alignItems: 'center', }}>
          <TouchableOpacity
            style={{ alignSelf: 'center', backgroundColor: 'darkorange', padding: 10, borderRadius: 50, elevation: 5 }}
            onPress={() => { this.confirmarCompra(); }}
          >
            <Text style={{ flex: 1, color: 'white', fontSize: 18 }}>Finalizar Feira</Text>
          </TouchableOpacity>
        </View>
        {
          /**
           * O overlay só é renderizado se a opção selecionada for Dinheiro
           */
        }
        <Overlay
          isVisible={this.state.openTransshipmentModal}
          height={Dimensions.get('window').height / 4}
          width={Dimensions.get('window').width - 80}
          animationType='slide'
          onBackdropPress={() => this.setState({ openTransshipmentModal: false })}
        >
          <View style={style.BoxUm}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}> Troco </Text>
          </View>
          <TextInput
            style={style.BoxDois}
            placeholder="Troco para quanto?"
            placeholderTextColor='darkorange'
          />
          <TouchableOpacity
            onPress={() => this.setState({ openTransshipmentModal: false })}
            style={style.BoxTres}
          >
            <Text style={{ color: 'white' }}>Pode pedir!</Text>
          </TouchableOpacity>
        </Overlay>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  cartValue: state.cartItems.cartValue,
  cartItems: state.cartItems.cart
});

export default connect(mapStateToProps, actions)(FinalizarPedido);

const style = {
  viewStyle: {
    flex: 1,
  },
  headerStyle: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textHeaderStyle: {
    fontSize: 18,
    color: 'grey',
    marginLeft: 25,
    fontWeight: 'bold'
  },
  textStyle: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 15,
    marginTop: 5
  },
  paymentMethod: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 15,
    
  },
  BoxUm: {
    backgroundColor: 'darkorange',
    height: 35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  BoxDois: {
    color: 'darkorange', 
    alignSelf: 'center', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, 
    borderColor: 'grey', 
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 20,
    height: 35,
    width: 180
  },
  BoxTres: {
    backgroundColor: 'darkorange', 
    justifyContent: 'center', 
    alignItems: 'center',
    alignSelf: 'center',
    width: 100,
    height: 35
  }
};
