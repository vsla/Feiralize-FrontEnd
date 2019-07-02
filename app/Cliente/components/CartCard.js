import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ReuseIcon from './ReuseIcon';
import Picker from './Picker';
import * as actions from '../redux/actions/cart';
import NumericInput from './NumericInput';


class CartCard extends Component {
  
  render() {
    return (
      <View style={{ marginTop: 10, backgroundColor:'#d2d2d2'}}>

        <View style={style.contentContainer}>
          <View style={style.pickerQuantidade}>
            <NumericInput data={this.props.item.brandSelected.amountSelected}/>
          </View>
          <View style={style.pickerQuantidade}>
            < Picker
              data={[{
                label: '8 kg',
                value: '8',
              },
              {
                label: '8 kg',
                value: '8',
              },
              {
                label: '8 kg',
                value: '8',
              }]}
            />
          </View>
          <Text style={style.text}>{this.props.item.fatherCategory.name}</Text>
          <View style={style.pickerMarca}>
            < Picker
              data={[{
                label: 'Marca indefinida',
                value: 'Marca indefinida',
              },
              {
                label: 'São josé',
                value: 'São josé',
              },
              {
                label: 'Santa clara',
                value: 'Santa clara',
              },
              ]}
            />
          </View>
          <TouchableOpacity // Carrinho de remover
            onPress={() => { this.props.remove_from_cart(this.props.item); }}
            style={{ justifyContent: 'center', marginHorizontal: 10 }}
          >
            <ReuseIcon
              name='trash'
              color="darkorange"
              size={22}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#e9e9e9', marginHorizontal: 10 }} />

      </View>
    );
  }
}
export default connect(null, actions)(CartCard);
const style = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 10
  },
  text: {
    marginHorizontal: 10,
    fontSize: 15,
    flex: 2,
    color: 'black'
  },
  pickerQuantidade: {
    flex: 1.2,
    marginLeft:5
  },
  pickerMarca: {
    flex: 2.5
  }
});
