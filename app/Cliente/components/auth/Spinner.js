import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//Use size if we pass, if not use large
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { Spinner };
