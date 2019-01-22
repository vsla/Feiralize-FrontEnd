import React, { Component } from 'react';
import { StyleSheet, View, Picker } from 'react-native';

export default class DropQuatidade extends Component {
	constructor(){
		super();
        this.state={
            PickerValue2:''
        }	
    };
    
  render() {
    return (
        <View style={quantidade.container}>
            <Picker
                style={{width:'100%', color: 'grey'}}
                selectedValue={this.state.PickerValue2}
                onValueChange={(itemValue2,itemIndex) => this.setState({PickerValue2:itemValue2})}
                >
                <Picker.Item label="1" value="1"/>
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3"/>
                <Picker.Item label="4" value="4"/>
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6"/>
                <Picker.Item label="7" value="7"/>
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9"/>
                <Picker.Item label="10" value="10"/>
		    </Picker>
        </View>
    );
  }
}

const quantidade = StyleSheet.create({
    container: {
      backgroundColor: 'whitesmoke',
      width: '25%',
      height: '15%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
  });