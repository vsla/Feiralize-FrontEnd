import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import ReuseIcon from "../components/ReuseIcon";
import { connect } from 'react-redux';
import * as actions from "../redux/actions/action";
import firebase from 'firebase';
class FinalizarPedido extends Component {
  static navigationOptions = {
    title: 'Finalizar pedido',

  };
  constructor(props) {
    super(props)
    this.state = {
      selected: 'dinheiro'
    }
  }
  /*
            < View style={style.headerStyle} >
            < TouchableOpacity style={{ marginLeft: 35 }} onPress={() => this.props.navigation.navigate("Compra")}>
              <ReuseIcon
                name="arrow-dropleft"
                color='grey'
                size={30}
              />
            </TouchableOpacity>
            <Text style={style.textHeaderStyle}>Finalizar pedido</Text>
          </View>
  */

  confirmarCompra = () => {
    Alert.alert(
      'Confirmar compra de R$ ' + (Math.round(this.props.cartValue * 100) / 100),
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
            var newPostKey = firebase.database().ref('/teste/data/feirasProntas/').push().key
            firebase.database().ref('/teste/data/feirasProntas/' + newPostKey).set({
              key: newPostKey,
              status: 'PENDENTE',
              items: this.props.cartItems,
              price: (Math.round(this.props.cartValue * 100) / 100),
              delivery: {
                type: 'Entrega em domicílio',
                date: "Segunda",
                hour: "13:00",
                location: 'Avenida Domingo Ferreira, 1034, apt 701'
              },
              notes: '',
              payment: this.state.selected
            });
            this.props.add_payment_method(this.state.selected);
          }
        },
      ],
    );


  }
  render() {
    return (
      <View style={style.viewStyle}>
        <ScrollView>
          <Text style={style.textStyle}>Fornecedor</Text>
          <View style={{
            backgroundColor: 'white', height: 60, borderTopColor: 'lavender',
            borderTopWidth: 0.8, borderBottomColor: 'lavender', borderBottomWidth: 0.8,
            paddingLeft: 15, paddingRight: 15, flexDirection: 'row'
          }}>
            <View style={{
              marginRight: 15, justifyContent: 'center',
              alignItems: 'center', backgroundColor: 'lightgrey', height: 40,
              width: 70, alignSelf: 'center'
            }}>
              <Text>Logo</Text>
            </View>
            <Text style={{ marginTop: 10 }}>Mercado do Bairro</Text>
          </View>

          <Text style={style.textStyle}>Dados da entrega</Text>
          <View style={{
            backgroundColor: 'white', height: 80, borderTopColor: 'lavender',
            borderTopWidth: 0.8, borderBottomColor: 'lavender', borderBottomWidth: 0.8,
            paddingLeft: 15, paddingRight: 15, paddingTop: 5
          }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>ENDEREÇO</Text>
            <Text style={{ fontSize: 12 }}>Avenida Boa Viagem, 120, apt 201 em...</Text>
            <View style={{ height: 1, backgroundColor: 'lightgrey' }}></View>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>DATA E HORA</Text>
            <Text style={{ fontSize: 12 }}>Hoje, 6 de maio, 18h30 as 19h00</Text>
          </View>
          <Text style={style.textStyle}>Forma de pagamento</Text>
          <View style={{
            backgroundColor: 'white', height: 50, borderTopColor: 'lavender',
            borderTopWidth: 0.8, borderBottomColor: 'lavender', borderBottomWidth: 0.8,
            padding: 15, marginBottom: 10
          }}>
          </View>
          <Text style={style.textStyle}>Carrinho</Text>
          <View style={{
            backgroundColor: 'white', borderTopColor: 'lavender',
            borderTopWidth: 0.8, borderBottomColor: 'lavender', borderBottomWidth: 0.8,
            paddingLeft: 15, paddingRight: 15, marginBottom: 70, elevation: 2
          }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 5 }}>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Qtd</Text>
                <Text style={{ fontSize: 15 }}>01</Text>
                <Text style={{ fontSize: 15 }}>01</Text>
                <Text style={{ fontSize: 15 }}>01</Text>
                <Text style={{ fontSize: 15 }}>01</Text>

              </View>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Descrição</Text>
                <Text style={{ fontSize: 15 }}>Produto</Text>
                <Text style={{ fontSize: 15 }}>Produto com desc longa...</Text>
                <Text style={{ fontSize: 15 }}>Feijão Santana 1kg</Text>
                <Text style={{ fontSize: 15 }}>Feijão Santana 1kg</Text>
                <Text style={{ fontSize: 15 }}>Feijão Santana 1kg</Text>
                <Text style={{ fontSize: 15 }}>Feijão Santana 1kg</Text>
                <Text style={{ fontSize: 15 }}>Feijão Santana 1kg</Text>
                <Text style={{ fontSize: 15 }}>Feijão Santana 1kg</Text>
                <Text style={{ fontSize: 15 }}>Feijão Santana 1kg</Text>
                <Text style={{ fontSize: 15 }}>Feijão Santana 1kg</Text>
                <Text style={{ fontSize: 15 }}>Taxa de entrega</Text>
              </View>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Preço</Text>
                <Text style={{ fontSize: 15 }}>R$ 0,00</Text>
                <Text style={{ fontSize: 15 }}>R$ 0,00</Text>
                <Text style={{ fontSize: 15 }}>R$ 6,00</Text>
                <Text style={{ fontSize: 15 }}>R$ 6,00</Text>
                <Text style={{ fontSize: 15 }}>R$ 6,00</Text>
                <Text style={{ fontSize: 15 }}>R$ 6,00</Text>
                <Text style={{ fontSize: 15 }}>R$ 6,00</Text>
                <Text style={{ fontSize: 15 }}>R$ 6,00</Text>
                <Text style={{ fontSize: 15 }}>R$ 6,00</Text>
                <Text style={{ fontSize: 15 }}>R$ 6,00</Text>
                <Text style={{ fontSize: 15 }}>R$ 8,00</Text>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: 'lightgrey', marginTop: 5 }}></View>
            <View style={{
              flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',
              marginBottom: 5, marginTop: 5
            }}>
              <Text style={{ fontWeight: 'bold', fontSize: 12, marginRight: 5 }}>TOTAL</Text>
              <Text style={{ fontSize: 15 }}>R$ 14,00</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 20, justifyContent: 'center', alignItems: 'center', }}>
          <TouchableOpacity
            style={{ alignSelf: 'center', backgroundColor: 'darkorange', padding: 10, borderRadius: 50, elevation: 5 }}
            onPress={() => { this.confirmarCompra() }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Finalizar Feira</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartValue: state.cartValue,
    cartItems: state.cart
  }
}

export default connect(mapStateToProps, actions)(FinalizarPedido);

const style = {
  viewStyle: {
    flex: 1,
  },
  headerStyle: {
    height: 50,
    flexDirection: "row",
    backgroundColor: 'white',
    justifyContent: "flex-start",
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
  }
}
