import React, { Component } from "react";
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import ReuseIcon from "../components/ReuseIcon";
import { connect } from 'react-redux';
import DetailsCard from '../components/DetailsCard';
import DetailsMercado from '../components/DetailsMercado'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Supermercados: [1, 2, 3]
    };
    console.log(this.props)
  }
  render() {
    return (
      <View style={style.Container}>
        < View>
          < TouchableOpacity style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }} onPress={() => this.props.navigation.pop()}>
            <ReuseIcon
              name="arrow-back"
              color='orange'
              size={25}
            />
          </TouchableOpacity>
          <Text style={{
            color: 'orange',
            fontSize: 30,
            marginLeft: 20
          }}>Detalhes</Text>
        </View>
        <View style={style.Mercado}>
          < DetailsMercado totalValue={this.props.cartValue} screenProps={this.props.navigation} />
        </View>
        < View style={{ flex: 1 }}>
          <FlatList
            data={this.props.cart}
            keyExtractor={item => item.title}
            renderItem={({ item }) =>
              <DetailsCard item={item} />}
          />
        </View >
        <View>
          <Text style={{
            marginLeft: 20
          }}>
            Frete R$ 5,10 chegará em 2 dias
                    </Text>
        </View>
        <View style={{ height: 1, width: 330, backgroundColor: 'orange', marginTop: 5, marginBottom: 5, alignSelf: 'center' }}></View>
        <View style={{
          alignItems: 'flex-end',
          marginRight: 25
        }}>
          <Text style={{
            color: 'slategray',
            fontSize: 10,
          }}>
            Valor total
                        </Text>
          <Text style={{
            color: 'slategray',
            fontSize: 16,
            marginBottom: 13
          }}>
            R$ {this.props.cartValue + 5.1}
          </Text>
        </View>
        <View style={style.BuyButton}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("scheduling")}>
            <Text style={{
              color: 'white'
            }}>
              COMPRAR
                        </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    cartValue: state.cartValue
  }
}

export default connect(mapStateToProps)(Login);

const style = {
  Container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  Mercado: {
    alignSelf: 'center',
    backgroundColor: '#f7f7f7',
    width: 300,
    height: 80,
    borderRadius: 5.3,
    marginTop: 6.6,
    marginLeft: 6.7,
    marginRight: 6.8,
    marginBottom: 8.4,
    flexDirection: 'row'
  },
  imageStyle: {
    flex: 1,
    height: 30,
    marginTop: 24,
    marginLeft: 20,
    marginRight: 20
  },
  BuyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 5.3,
    width: 300,
    height: 40,
    marginLeft: 30,
    marginRight: 6.8,
    marginBottom: 8.4,
  }
}
