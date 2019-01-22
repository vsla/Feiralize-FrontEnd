import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';

class PerfilButton extends Component {
  render() {
    return (
      <TouchableHighlight>
        <View style={style.viewContainer}>
          <Image
            source={this.props.imagePath}
            style={style.Image}
          />
          <Text>{this.props.text}</Text>        
        </View>
      </TouchableHighlight>
    );
  }
}
export default PerfilButton;
const style = {
  viewContainer:{
    flexDirection:'row'
  },
  image:{
    width:50,
    height:50
  }
}