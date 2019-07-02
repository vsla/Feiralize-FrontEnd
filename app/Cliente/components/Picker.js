import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';

export default class Deletepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.data,
      selected: ''
    };
  }

  renderPickerItems() {
    return this.state.items.map((item) => {
      return (
        <Picker.Item
          label={item.label}
          value={item.value}
          key={item.key || item.label}
          color='black'
        />
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 1, borderRadius: 20, backgroundColor: 'white' }}>
        <Picker
          selectedValue={this.props.selectedValue}
          style={{
            flex: 1, marginRight: -50, backgroundColor: 'transparent'
          }}
          onValueChange={(itemValue) => this.props.onValueChange(itemValue)}
          itemStyle={{ fontSize: 14 }}
        >
          {this.renderPickerItems()}
        </Picker>
      </View>
    );
  }
}
