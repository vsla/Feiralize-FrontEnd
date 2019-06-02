import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/Icones/iconeFeiralize1.png';

const FeiralizeLogo = () => {
  const { logoStyle } = styles;

  return (
    <Image
      source={logo}
      style={logoStyle}
    />
  );
};

const styles = {
  logoStyle: {    
    height: 250,
    flex: 1,
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  }
};

export { FeiralizeLogo };
