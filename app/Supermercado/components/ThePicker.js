import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';

export default class ThePicker extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      language: 'Default value!'
    }
  }

  render() {
    return (
      <Picker
        mode='dialog'
        selectedValue={this.state.language}
        style={{ width: 280 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({language: itemValue})
        }>
        <Picker.Item label="mercadodobairro@gmail.com" value="mercadodobairro@gmail.com" color='white'/>
        <Picker.Item label="Sair" value="Sair" color='white' />
      </Picker>
    )
  }
}