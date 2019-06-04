import React from 'react';
import { TextInput, View } from 'react-native';
import ReuseIcon from '../ReuseIcon';

const AuthInput = ({ iconName, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, iconStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={iconStyle}>
        <ReuseIcon
          name={iconName} 
          color='#FFFFFF' 
          size={30} 
        />
      </View>    
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false} 
        placeholder={placeholder}
        placeholderTextColor={'#FFFFFF'}
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

//<Text style={labelStyle}>{label}</Text>

const styles = {
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 10,
    fontSize: 16,
    lineHeight: 23,
    flex: 3.5,
    color: '#FFFFFF'
  },
  iconStyle: {
    flex: 1,
    color: '#FFFFFF',
    borderRightColor: 'rgba(255, 255, 255, 0.2)',
    borderRightWidth: 3
  },
  containerStyle: {
    height: 55,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
  }
};

export { AuthInput };
