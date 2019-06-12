/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Picker from '../Picker';
import * as actions from '../../redux/actions/cart';
import NumericInput from '../NumericInput';

class BrandComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const amount = this.amountOnCart();
    this.state = {
      amount: 0
    };
  }

  getCapacities = () => {
    return this.props.brand.item.capacity.map(capacityItem => {
      return { label: capacityItem, value: capacityItem };
    });
  }

  amountOnCart = () => {
    const categoryId = this.props.greatParentProps.parentState.modalData.id;
    if (categoryId in this.props.itemsSelected) {
      if (this.props.itemsSelected[categoryId].brands.includes(this.props.brand.item.id)) {
        return true;
      }
      return false;
    } 
    return false;
    
  }
  changeRedux = (action) => {
    const categorySelected = this.props.greatParentProps.parentState.modalData;
    const productSelected = {
      brandSelected: {
        id: this.props.brand.item.id,
        name: this.props.brand.item.name,
        amountSelected: this.state.amount,
        capacitySelected: '500ml',
      },
      fatherCategory: categorySelected
    };

    if (action === 'create') {
      this.props.greatParentProps.add_to_cart(productSelected);
    } else if (action === 'remove') {
      this.props.greatParentProps.remove_from_cart(productSelected);
    }
  }

  amountChange = (action) => {
    // this.pressCheckBox(this.props.brand.index)
    if (action === '+') {
      if (this.state.amount === 0) {
        this.setState({ amount: this.state.amount + 1 });
        this.changeRedux('create')
      } else {
        this.changeRedux('remove')
        this.setState({ amount: this.state.amount + 1 });
        this.changeRedux('create')
      }      
    } else if (action === '-') {
      if (this.state.value > 1) {
        this.changeRedux('remove')
        this.setState({ amount: this.state.amount - 1 });
        this.changeRedux('create')
      } else if (this.state.value === 1) {
        this.changeRedux('remove')
        this.setState({ amount: this.state.amount - 1 });
      }
    }
  }

  render() {
    return (
      <View style={style.modalStyle}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <View style={{ flex: 0.5, marginHorizontal: 5 }}>
              <NumericInput data={this.state.amount} onChange={this.amountChange}  />
            </View>
            <View style={{ flex: 0.5 }}>
              <Picker data={this.getCapacities()} />
            </View>
            
          </View>
          <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{ flex: 2, textAlignVertical:'center'}}>{this.props.brand.item.name}{this.state.amount}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems.cart,
  itemsSelected: state.cartItems.itemsSelected
});

export default connect(mapStateToProps, actions)(BrandComponent);

const style = StyleSheet.create({
  modalStyle: {
    marginVertical: 5,
    backgroundColor: '#dfdfdf',
    paddingVertical: 5,
    borderRadius: 10,
    flex:1
  },
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'darkorange',
    alignItems: 'center',
    borderRadius: 20,

  },
  sectionHeader: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'gray',
    alignItems: 'center',
    marginBottom: 5
  },

});
