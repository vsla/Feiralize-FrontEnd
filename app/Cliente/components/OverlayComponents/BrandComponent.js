/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Picker from '../Picker';
import * as actions from '../../redux/actions/cart';

class BrandComponent extends Component {
  constructor(props) {
    super(props);
    const checked = this.isOnCart();
    this.state = {
      checked
    };
  }

  getCapacities = () => {
    return this.props.brand.item.capacity.map(capacityItem => {
      return { label: capacityItem, value: capacityItem };
    });
  }

  isOnCart = () => {
    const categoryId = this.props.greatParentProps.parentState.modalData.id;
    if (categoryId in this.props.itemsSelected) {
      if (this.props.itemsSelected[categoryId].brands.includes(this.props.brand.item.id)) {
        return true;
      }
      return false;
    } 
    return false;
    
  }
  pressCheckBox = () => {
    const categorySelected = this.props.greatParentProps.parentState.modalData;
    const productSelected = {
      brandSelected: {
        id: this.props.brand.item.id,
        name: this.props.brand.item.name,
        amountSelected: 1,
        capacitySelected: '500ml',
      },
      fatherCategory: categorySelected
    };

    if (this.state.checked === false) {
      this.setState({
        checked: true
      });
      this.props.greatParentProps.add_to_cart(productSelected);
    } else {
      this.setState({
        checked: false
      });
      this.props.greatParentProps.remove_from_cart(productSelected);
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
            flex:1,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex:1,
            }}
          >
            <View style={{ flex: 0.5 }}>
              <Picker
                data={[
                  {
                    label: '1',
                    value: '1'
                  },
                  {
                    label: '2',
                    value: '2'
                  },
                  {
                    label: '3',
                    value: '3'
                  }
                ]}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <Picker data={this.getCapacities()} />
            </View>
            
          </View>
          <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{ flex: 2, textAlignVertical:'center'}}>{this.props.brand.item.name}</Text>
          </View>
          
          <View style={{flex:0.3}}>
            <CheckBox
              checked={this.state.checked}
              onPress={() => {
                this.pressCheckBox(this.props.brand.index);
              }}
              containerStyle={{ margin: 0, padding: 0 }}
            />
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
