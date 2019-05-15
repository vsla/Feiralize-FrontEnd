import React, { Component } from 'react';
import { View, Image } from "react-native";
import theme from '../styles/theme.style';

export default class HeaderLogin extends Component {
  render() {
    return (
      <View style={style.logoContainer}>
        <Image
          source={require('../assets/Icones/iconeFeiralize1.png')}
          style={{ width: 150, height: 150 }}
        />
      </View>
    )
  }
}

const style = {
  logoContainer: {
    flex: 1.5,
    backgroundColor: theme.BG_color,
    justifyContent: 'center',
    alignItems: 'center',
  },
}