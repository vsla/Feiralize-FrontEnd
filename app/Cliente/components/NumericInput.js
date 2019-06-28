/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ReuseIcon from './ReuseIcon';

export default class NumericInput extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      value: this.props.data
    };
  }

  addValue = () => {
    this.setState({ value: this.state.value + 1 });
    this.props.onChange('+');
  }

  removeValue = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
      this.props.onChange('-');
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
          <Text style={{ fontSize: 20, textAlign: 'center'}}>{this.state.value}</Text>
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
