import React, { Component } from 'react'
import { Text, View, Picker} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
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
                    style={{color:"blue"}}
                />
            );
        });
    }
  render() {
    return (
      <View style={{backgroundColor:'#d4d4d4'}}>
        <Picker 
        selectedValue={this.state.favColor}
        style={{height: 30, width: 100, borderRadius:50, borderWidth:1}}
        onValueChange={(value) =>
          this.setState({favColor: value})
        }
        mode={'dropdown'}
        >
        {this.renderPickerItems()}
        </Picker>
      </View>
    )
  }
}
 /*
<RNPickerSelect
          placeholder={{}}
          hideIcon={true}
          items={this.state.items}
          onValueChange={()=>console.log("oi")}
          style={{underline:{}}}
        />
 */