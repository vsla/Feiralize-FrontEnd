import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ReuseIcon from '../ReuseIcon';

//{ onPress } Reusable Technique
// desestruturei props.children para chamar direto
const FacebookButton = ({ onPress, children, iconName }) => {
  const { buttonStyle, textStyle, iconStyle } = styles;

  return (
    //onPress is a prop to know when the user presses the component
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={iconStyle}>
        <ReuseIcon
          name={iconName} 
          color='#FFFFFF' 
          size={32} 
        />
      </View>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    //For the element itself to fill all the container
    alignSelf: 'stretch',
    backgroundColor: '#3B589C',
    borderRadius: 5,
    //alinhar conteudo na linha
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    //center the text itself inside the button
    alignSelf: 'center',
    //color: '#007aff',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    flex: 2
  },
  iconStyle: {
    flex: 1
  }

};

export { FacebookButton };
