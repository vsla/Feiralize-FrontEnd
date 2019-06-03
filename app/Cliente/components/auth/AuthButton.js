import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//{ onPress } Reusable Technique
// desestruturei props.children para chamar direto
const AuthButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    //onPress is a prop to know when the user presses the component
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
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
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  textStyle: {
    //center the text itself inside the button
    alignSelf: 'center',
    //color: '#007aff',
    color: '#D36E52',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { AuthButton };
