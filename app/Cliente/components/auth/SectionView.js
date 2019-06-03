import React from 'react';
import { View } from 'react-native';

const SectionView = (props) => {
  const { sectionStyle } = styles;

  return (
    <View style={sectionStyle} >
      {props.children}
    </View>  
  );
};

const styles = {
  sectionStyle: {    
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 10
    //backgroundColor: 'red'
  }
};

export { SectionView };
