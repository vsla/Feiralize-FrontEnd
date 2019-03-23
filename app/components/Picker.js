import React from 'react';
import { StyleSheet, Text, View, Picker, Button, Modal, TouchableHighlight } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerSelection: 'Default value!',
      items: this.props.data,
      favColor: null
    }
  }

  renderPickerItems() {
    return this.state.items.map((item) => {
        return (
            <Picker.Item
                label={item.label}
                value={item.value}
                key={item.key || item.label}
                color= '#8b8b8b'
            />
        );
    });
}

  render() {
    return (
        <RNPickerSelect
          items={this.state.items}
          onValueChange={value => {
            this.setState({
              pickerSelection: value,
            });
          }}
        />
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3d3d3", 
    borderRadius: 5.3,
    height: 40,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    flex:1,
    height: 30,
    backgroundColor: "#bebebe"
  }
});
