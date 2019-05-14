import React, { Component } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import ListaProdutoTabNav from '../routes/ListaProdutoNav'
import ReuseIcon from "../components/ReuseIcon";

class ListaProduto extends Component {
  render() {
    return (
      <View style={style.viewStyle}>
        < View style={style.headerStyle} >

          <View style={style.inputStyle}>
            <TextInput style={style.textStyle}
              placeholder="Buscar item"
              placeholderTextColor='white'
              onFocus={() => this.props.navigation.navigate('ItemSearching')}
            />
            < ReuseIcon
              name="search"
              color='white'
              size={30}
            />
          </View>
        </View>
        <ListaProdutoTabNav />
      </View>
    );
  }
}
export default ListaProduto
const style = {
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerStyle: {
    flex: 0.10,
    flexDirection: "row",
    backgroundColor: 'darkorange',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  inputStyle: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    marginRight: 10,
  }
}