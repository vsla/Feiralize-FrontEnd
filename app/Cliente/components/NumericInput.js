/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/cart';
import ReuseIcon from './ReuseIcon';
import { thisExpression } from '@babel/types';

class NumericInput extends Component {
  constructor(props) {
    super(props);
    console.log('numeric', this.props);
    this.state = {
      value: this.props.data
    };
  }

  showValue = () => {
    this.props.cartItems.forEach(element => {
      
    });
  }
  addValue = () => {
    this.setState({ value: this.state.value + 1 });
  }

  removeValue = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  }

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity
          style={style.rightButtonContainer}
          onPress={() => this.removeValue()}
        >
          <ReuseIcon
            name={'remove'}
            size={20}
            color={'red'}
          />
        </TouchableOpacity>
        <View style={style.numberInput}>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>{this.state.value}</Text>
        </View>
        <TouchableOpacity
          style={style.leftButtonContainer}
          onPress={() => this.addValue()}
        >
          <ReuseIcon
            name={'add'}
            size={20}
            color={'green'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cartItems.cart
  };
};
export default connect(mapStateToProps, actions)(NumericInput);

const style = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50
  },
  numberInput: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  rightButtonContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  leftButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})
;
