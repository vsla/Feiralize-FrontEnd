import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet, Platform } from 'react-native';
import ReuseIcon  from "./ReuseIcon";
class PerfilButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={style.buttonContainer}
      >
        <View style={style.viewContainer}>
          <ReuseIcon
            name={this.props.name}
            color={this.props.color}
            size={26}
          />
          <Text style={this.props.textStyle}
          >{this.props.text}</Text>        
        </View>
      </TouchableOpacity>
    );
  }
}
export default PerfilButton;
const style = {
  buttonContainer:{
    margin: 10,
  },
  viewContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
}