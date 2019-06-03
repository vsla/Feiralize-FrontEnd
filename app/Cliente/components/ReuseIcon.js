import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';

//Platform.OS === 'ios' ? 'ios-' +name : 'md-'+name
const ReuseIcon = ({ name, color, size }) => {
  //Verificar name do icon de acordo com a sintax do ion icon
  //se for icon normal, pode ser md- ou ios-
  //se for icon logo, eh logo-
  let verified;
  if (name.includes('logo-')) {
    verified = name;
  } else if (Platform.OS === 'ios') {
    verified = 'ios-' + name;
  } else {
    verified = 'md-' + name;
  }

  return (
    <Icon
        name={verified}
        color={color}
        size={size}
        type='ionicon'
        reverse={false}
    />
  );
};

export default ReuseIcon;
