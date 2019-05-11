import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import ReuseIcon from "../components/ReuseIcon";

class ListaProduto extends Component {
  static navigationOptions = {
    header: null,
    title: 'Home',

  };
  render() {
    return (
      <View style={style.viewStyle}>
        <ScrollView>
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

          <Text style={style.textStyle}>Fornecedor</Text>
          <View style={{backgroundColor: 'white', height: 60, borderTopColor: 'lavender', 
                        borderTopWidth: 0.8, borderBottomColor: 'lavender', borderBottomWidth: 0.8,
                        paddingLeft: 15, paddingRight: 15, flexDirection: 'row'}}>
            <View style={{marginRight: 15, justifyContent: 'center',
                          alignItems: 'center', backgroundColor: 'lightgrey', height: 40, 
                          width: 70, alignSelf: 'center'}}>
              <Text>Logo</Text>
            </View>
            <Text style={{marginTop: 10}}>Mercado do Bairro</Text>
          </View>

          <Text style={style.textStyle}>Dados da entrega</Text>
          <View style={{backgroundColor: 'white', height: 80, borderTopColor: 'lavender', 
                        borderTopWidth: 0.8, borderBottomColor: 'lavender', borderBottomWidth: 0.8,
                        paddingLeft: 15, paddingRight: 15, paddingTop: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>ENDEREÇO</Text>
            <Text style={{fontSize: 12}}>Avenida Boa Viagem, 120, apt 201 em...</Text>
            <View style={{height: 1, backgroundColor: 'lightgrey'}}></View>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>DATA E HORA</Text>
            <Text style={{fontSize: 12}}>Hoje, 6 de maio, 18h30 as 19h00</Text>
          </View>

          <Text style={style.textStyle}>Carrinho</Text>
          <View style={{backgroundColor: 'white', height: 150, borderTopColor: 'lavender', 
                      borderTopWidth: 0.8, borderBottomColor: 'lavender', borderBottomWidth: 0.8,
                      paddingLeft: 15, paddingRight: 15}}>
            <ScrollView>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 5}}>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 12}}>Qtd</Text>
                  <Text style={{fontSize: 15}}>01</Text>
                  <Text style={{fontSize: 15}}>01</Text>
                  <Text style={{fontSize: 15}}>01</Text>
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 12}}>Descrição</Text>
                  <Text style={{fontSize: 15}}>Produto</Text>
                  <Text style={{fontSize: 15}}>Produto com desc longa...</Text>
                  <Text style={{fontSize: 15}}>Feijão Santana 1kg</Text>
                  <Text style={{fontSize: 15}}>Taxa de entrega</Text>
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 12}}>Preço</Text>
                  <Text style={{fontSize: 15}}>R$ 0,00</Text>
                  <Text style={{fontSize: 15}}>R$ 0,00</Text>
                  <Text style={{fontSize: 15}}>R$ 6,00</Text>
                  <Text style={{fontSize: 15}}>R$ 8,00</Text>
                </View>
              </View>
            </ScrollView>
              <View style={{height: 1, backgroundColor: 'lightgrey', marginTop: 5}}></View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',
                            marginBottom: 5, marginTop: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 12, marginRight: 5}}>TOTAL</Text>
                <Text style={{fontSize: 15}}>R$ 14,00</Text>
              </View>
          </View>
      
          <Text style={style.textStyle}>Forma de pagamento</Text>
          <View style={{backgroundColor: 'white', height: 150, borderTopColor: 'lavender', 
                        borderTopWidth: 0.8, borderBottomColor: 'lavender', borderBottomWidth: 0.8,
                        padding: 15, marginBottom: 30}}>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default ListaProduto
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
    marginTop: 10
  }
}
