/* eslint-disable no-undef */
//PRODUCTS
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { Badge } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/cart';
import ReuseIcon from './ReuseIcon';

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.data.photo,
      buttonStyle: { backgroundColor: 'white', flex: 1 },
      IconName: 'add',
      corStyle: 'orange',
      selected: 0
    };
  }

  addProduct = () => {
    this.setState({
      selected: this.state.selected + 1
    });
  }

  buttonPressed = () => {
    //Requisição para saber se tem subcategorias ou apenas produtos
    this.props.showModal(this.props.data);
  }

  // Return how many brands are on the cart
  // Read itemsSelected from redux
  brandsSelected = () => {
    if (this.props.data.id in this.props.itemsSelected) {
      return this.props.itemsSelected[this.props.data.id].amountSelected;
    } 
    return 0;
  };
  
  render() {
    return (
      <View style={style.containerStyle}>
        <TouchableOpacity
          onPress={() => this.buttonPressed()}
          style={{ flex: 1 }}
        >
          <View style={this.state.buttonStyle}>
            <Image
              style={{ opacity: 0.6, flex: 1, width: '100%', height: 100 }}
              source={{ uri: this.state.imageUrl }}
            />
            <View
              style={{
                backgroundColor: this.state.corStyle,
                opacity: 0.9,
                borderRadius: 100,
                position: 'absolute',
                paddingHorizontal: 12,
                paddingVertical: 8,
                top: 5,
                right: 5
              }}
            >
              <ReuseIcon
                name={this.state.IconName}
                color={'white'}
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={style.textContainer}>
          <Text>{this.props.data.name}</Text>
          <Badge
            value={this.brandsSelected()}
            status="primary"
            containerStyle={{ marginRight: 10 }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems.cart,
    itemsSelected: state.cartItems.itemsSelected
  };
};

export default connect(mapStateToProps, actions)(ItemCard);


const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 2,
  },
  textContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginLeft: 10,
    flexDirection: 'row'
  },
  imageStyle: {
    height: 150,
    width: '100%',
    opacity: 0.6,
    flex: 1,
    tintColor: 'green'
  },
});

