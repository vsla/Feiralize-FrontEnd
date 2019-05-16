import React from 'react';
import { StyleSheet, Text, View, Picker, Button, Modal, TouchableHighlight } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ReuseIcon from './ReuseIcon'
export default class App extends React.Component {
	/**
	 * Picker Component usado desse link
	 * -- > https: //github.com/lawnstarter/react-native-picker-select
	 */
  constructor(props) {
    super(props);
    this.state = {
      pickerSelection: '',
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
          color='#8d8d8d'
        />
      );
    });
  }

  render() {
    if(this.props.type === 1){
      return (
        <RNPickerSelect
          placeholder={{}}
          useNativeAndroidPickerStyle={false}
          items={this.state.items}
          onValueChange={value => {
            this.setState({
              pickerSelection: value,
            });
          }}
          style={{
            //Controla o conteúdo do picker, as opções
            inputAndroid: {
              flex: 1,
              fontSize: 13,
              color: '#555555',
              marginLeft: 10,
            },
            // style do container, background
            inputAndroidContainer: {
              backgroundColor: "#f5f5f5",
              borderRadius: 15,
            },
          }}
        />

      );
    } else if (this.props.type === 2){
      return (
        <RNPickerSelect
          placeholder={{}}
          useNativeAndroidPickerStyle={false}
          items={this.state.items}
          onValueChange={value => {
            this.setState({
              pickerSelection: value,
            });
          }}
          style={{
            //Controla o conteúdo do picker, as opções
            inputAndroid: {
              flex: 1,
              fontSize: 13,
              color: '#555555',
              marginLeft: 5,
              marginRight:3,
            },
            // style do container, background
            inputAndroidContainer: {
              backgroundColor: "#f5f5f5",
              borderRadius: 15,
              
            },
          }}
        />

      );
    }
    
  }
}

