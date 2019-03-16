import React from 'react';
import { StyleSheet, Text, View, Picker, Button, Modal, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 'Default value!',
      items: [
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Orange',
          value: 'orange',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
      ],
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
      <View style={styles.container}>
        <Picker
          style={styles.botao}
          selectedValue={ this.state.pickerSelection }
          onValueChange={(itemValue, itemIndex) => this.setState({ pickerSelection: itemValue})}
          itemTextStyle={{ fontSize: 100, color: '#8b8b8b' }}
          >
          {this.renderPickerItems()}
        </Picker>
      </View>
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
    //backgroundColor: 'blue', 
    height: 30,
    width: '100%',
  }
});