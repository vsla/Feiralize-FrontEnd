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
            placeholder = {{
                    label: '1kg',
                    value: null,
                }}
            useNativeAndroidPickerStyle={false}
            items={this.state.items}
            onValueChange={value => {
              this.setState({
                pickerSelection: value,
              });
            }}
            style={{
                placeholder:{
					color:'red',
				},
				// style do container, background
				inputAndroidContainer:{
					backgroundColor:"#d6d6d6",
					borderRadius:60,
					color:'red'
				},
				inputAndroid:{
					marginLeft:10,
				},
				iconContainer: {
					top: 10,
					right: 12,
				},
			}}
			Icon={() => {
				return <ReuseIcon
					color={"red"}
					name={"trash"}
					size={10}
				/>
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
