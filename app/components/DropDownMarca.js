import React, { Component } from 'react';
import { StyleSheet, View, Picker } from 'react-native';

export default class DropMarca extends Component {
	constructor(){
		super();
		this.state={
            PickerValue1:''
        }
    };
    
  render() {
    return (
        <View style={styles.container}>
            <Picker
                hideIcon={true}
                style={{width:'100%', color: 'grey'}}
                selectedValue={this.state.PickerValue1}
                onValueChange={(itemValue,itemIndex) => this.setState({PickerValue1:itemValue})}
                >
                <Picker.Item label="Marca indefinida" value=""/>
                <Picker.Item label="Nestlé" value="Nestlé" />
                <Picker.Item label="Vitarella" value="Vitarella"/>
		    </Picker>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    width: '55%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});