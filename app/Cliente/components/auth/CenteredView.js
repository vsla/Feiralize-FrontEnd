import React from 'react';
import { View } from 'react-native';

const CenteredView = (props) => {
  const { centeredStyle } = styles;

  return (
    <View style={centeredStyle} >
      {props.children}
    </View>  
  );
};

const styles = {
  centeredStyle: {
    //backgroundColor: '#fff',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    //marginTop: 50
    marginBottom: 50,
    flex: 1
  }
};

export { CenteredView };
