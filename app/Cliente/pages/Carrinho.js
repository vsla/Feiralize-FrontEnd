import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import ItemCard from '../components/ItemCard'
import CartCard from '../components/CartCard';
import ReuseIcon from "../components/ReuseIcon";


class Carrrinho extends Component {
  render() {
    console.log(this.props.cart)
    return (
      < View style={{ flex: 1 }}>
        <FlatList
          data={this.props.cart}
          keyExtractor={item => item.name}
          renderItem={({ item }) =>
            <CartCard item={item} />}
        />
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 20, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Supermarkets')}
            style={{
              backgroundColor: '#004000',
              paddingHorizontal: 15, borderRadius: 50, paddingVertical: 5,
            }}
          >
            <Text style={{ fontSize: 18, color: 'white' }}> Finalizar compra</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartItems.cart
  }
}

export default connect(mapStateToProps)(Carrrinho);