/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import Picker from '../Picker';
import * as actions from '../../redux/actions/cart';
import NumericInput from '../NumericInput';

class BrandComponent extends Component {
  constructor(props) {
    super(props);
    const amount = this.amountOnCart();
    this.state = {
      amount: 0,
      capacitySelected: ''
    };
  }
  
  getCapacities = () => {
    return this.props.brand.item.capacity.map(capacityItem => {
      return { label: capacityItem, value: capacityItem };
    });
  }
  capacitySelected = (brand) => {
    this.setState({ capacitySelected: brand });
  }

  amountOnCart = () => {
    console.log('props no brandComponent', this.props);
    this.props.cartItems.forEach(element => {
      console.log(element)
      if (element.brandSelected.id === this.props.brand.id) {
        if (element.brandSelected.capacitySelected === this.state.capacitySelected) {
          console.log('a',element.brandSelected.amountSelected)
        }
      }
    });
  }

  changeRedux = (action, type) => {
    const categorySelected = this.props.greatParentProps.parentState.modalData;
    console.log('amount selected', this.state.amount);
    const productSelected = {
      brandSelected: {
        id: this.props.brand.item.id,
        name: this.props.brand.item.name,
        amountSelected: this.state.amount,
        capacitySelected: this.state.brandSelected,
      },
      fatherCategory: categorySelected
    };

    switch (action) {
      case 'create':
        this.props.greatParentProps.add_to_cart(productSelected);
        break;
      case 'remove':
        this.props.greatParentProps.remove_from_cart(productSelected);
        break;
      case 'update':
        productSelected.brandSelected.amountSelected += 1;
        productSelected.type = type;
        break;
      default:
        break;
    }
  }

  amountChange = (action) => {
    // this.pressCheckBox(this.props.brand.index)
    if (action === '+') {
      if (this.state.amount === 0) {
        this.setState({ amount: this.state.amount + 1 });
        console.log('amount selected on amount change', this.state);
        this.changeRedux('create', action);
      } else {
        this.changeRedux('remove', action);
        this.setState({ amount: this.state.amount + 1 });
        this.changeRedux('create', action);
      }      
    } else if (action === '-') {
      if (this.state.value > 1) {
        this.changeRedux('remove', action);
        this.setState({ amount: this.state.amount - 1 });
        this.changeRedux('create', action);
      } else if (this.state.value === 1) {
        this.changeRedux('remove', action);
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
              <NumericInput 
                data={this.state.amount} 
                brandSelected={this.props.brand} 
                capacitySelected={this.state.capacitySelected}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <Picker 
                data={this.getCapacities()} 
                selectedValue={this.state.capacitySelected}
                onValueChange={this.capacitySelected}
              />
            </View>
            
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ flex: 2, textAlignVertical: 'center' }}>{this.props.brand.item.name}{this.state.amount}</Text>
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
    flex: 1
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
