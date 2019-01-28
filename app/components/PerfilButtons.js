import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image, StyleSheet } from 'react-native';

class PerfilButton extends Component {
  render() {
    return (
      <TouchableHighlight>
        <View style={style.viewContainer}>
          <Image
            source={this.props.imagePath}
            style={style.image}
          />
          <Text style={this.props.textStyle}
          >{this.props.text}</Text>        
        </View>
      </TouchableHighlight>
    );
  }
}
export default PerfilButton;
const style = {
  viewContainer:{
    flexDirection:'row',
    marginBottom:10,
    alignItems:'center',
  },
  image:{
    width:30,
    height:30,
    margin:5,
  },
  
}